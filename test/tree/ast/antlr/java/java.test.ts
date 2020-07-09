/*
 * Copyright © 2020 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as astUtils from "@atomist/automation-client/lib/tree/ast/astUtils";
import { InMemoryProject } from "@atomist/automation-client/lib/project/mem/InMemoryProject";
import { InMemoryFile as InMemoryProjectFile } from "@atomist/automation-client/lib/project/mem/InMemoryFile";
import { TreeNode, TreeVisitor, visit } from "@atomist/tree-path";
import * as assert from "power-assert";
import { Java9FileParser, JavaFileParser } from "../../../../../lib/tree/ast/antlr/java/JavaFileParser";

interface TreeNodeOutline {
    name: string;
    children: TreeNodeOutline[];
    value?: string;
}

function stn(tn: TreeNode): TreeNodeOutline {
    const children = (tn.$children || []).map(stn);
    return {
        name: tn.$name,
        children,
        value: children.length > 0 ? undefined : tn.$value,
    };
}

const AllJavaFiles = "**/*.java";

const JavaWithLambda = `
import java.util.function.Function;

public class Foo {
    int i = 5;
    Function<String, String> morningGreeting = (String str) -> "Good Morning " + str + "!";

    Function<String, String> reverseStr = (str) -> {
		String result = "";

		for(int i = str.length()-1; i >= 0; i--)
			result += str.charAt(i);

		return result;
    };
}
`;

describe("java grammar", () => {
    it("should parse a file", async () => {
        const f = new InMemoryProjectFile(
            "src/main/java/Foo.java",
            "import foo.bar.Baz;\npublic class Foo { int i = 5;}",
        );
        const ast = await JavaFileParser.toAst(f);
        assert.strictEqual(ast.$name, "compilationUnit");
    });

    it("should parse a file with a lambda with Java9Parser", async () => {
        const f = new InMemoryProjectFile("src/main/java/Foo.java", JavaWithLambda);
        const ast = await Java9FileParser.toAst(f);
        // console.log(JSON.stringify(stn(ast)));
        assert.strictEqual(ast.$name, "compilationUnit");
    });

    it("should parse problematic source code", async () => {
        const f = new InMemoryProjectFile("src/main/java/com/av/AardvarkApplication.java", ProblemFile1);
        const ast = await JavaFileParser.toAst(f);
        assert.strictEqual(ast.$name, "compilationUnit");
    });

    it("should parse a file and keep positions", async () => {
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5;}";
        const f = new InMemoryProjectFile("src/main/java/Foo.java", content);
        let terminalCount = 0;
        await JavaFileParser.toAst(f).then(root => {
            let minOffset = -1;
            const v: TreeVisitor = tn => {
                assert(tn.$offset !== undefined);
                assert(tn.$offset >= minOffset, `Must have position for ${JSON.stringify(tn)}`);
                if (!!tn.$value) {
                    ++terminalCount;
                    // It's a terminal
                    assert(content.substr(tn.$offset, tn.$value.length) === tn.$value);
                }
                minOffset = tn.$offset;
                return true;
            };
            visit(root, v);
            assert(terminalCount > 0);
        });
    });

    it("should reject invalid path expression", async () => {
        const p = InMemoryProject.of({
            path: "src/main/java/Foo.java",
            content: "import foo.bar.Baz;\npublic class Foo { int i = 5;}",
        });
        astUtils
            .matches(p, {
                parseWith: JavaFileParser,
                globPatterns: AllJavaFiles,
                pathExpression: "//thisDoesntExist/Identifier",
            })
            .then(
                () => assert.fail("should have thrown an error"),
                err => {
                    assert(err.message.includes("thisDoesntExist"));
                },
            );
    });

    it("should get into AST", async () => {
        const p = InMemoryProject.of({
            path: "src/main/java/Foo.java",
            content: "import foo.bar.Baz;\npublic class Foo { int i = 5;}",
        });
        await astUtils
            .matches(p, {
                parseWith: JavaFileParser,
                globPatterns: AllJavaFiles,
                pathExpression: "//variableDeclaratorId/Identifier",
            })
            .then(matches => {
                assert(matches.length === 1);
                assert(matches[0].$value === "i");
            });
    });

    it("should get into AST and allow scalar navigation via properties", async () => {
        const p = InMemoryProject.of({
            path: "src/main/java/Foo.java",
            content: "import foo.bar.Baz;\npublic class Foo { int i = 5;}",
        });
        await astUtils
            .matches(p, {
                parseWith: JavaFileParser,
                globPatterns: AllJavaFiles,
                pathExpression: "//variableDeclaratorId",
            })
            .then(matches => {
                assert(matches.length === 1);
                assert((matches[0] as any).Identifier === "i");
            });
    });

    it("should get into AST and update single terminal", async () => {
        const path = "src/main/java/Foo.java";
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5;}";
        const p = InMemoryProject.of({ path, content });
        await astUtils
            .fileMatches(p, {
                parseWith: JavaFileParser,
                globPatterns: AllJavaFiles,
                pathExpression: "//variableDeclaratorId/Identifier",
            })
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[0].$value = "xi";
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(
                        f.getContentSync() === content.replace("int i", "int xi"),
                        `Erroneous content: [${f.getContentSync()}]`,
                    );
                });
            });
    });

    it("should get into AST and update two terminals", async () => {
        const path = "src/main/java/Foo.java";
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5; float x = 8.0; }";
        const p = InMemoryProject.of({ path, content });
        await astUtils
            .fileMatches(p, {
                parseWith: JavaFileParser,
                globPatterns: AllJavaFiles,
                pathExpression: "//variableDeclaratorId/Identifier",
            })
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[1].$value = "flibbertygibbit";
                target.matches[0].$value = "xi";
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(
                        f.getContentSync() ===
                            content.replace("int i", "int xi").replace("float x", "float flibbertygibbit"),
                        `Erroneous content: [${f.getContentSync()}]`,
                    );
                });
            });
    });

    it("should get into AST and update single non-terminal", async () => {
        const path = "src/main/java/Foo.java";
        const variableDeclaration = "int i = 5;";
        const content = `import foo.bar.Baz;\npublic class Foo { ${variableDeclaration}}`;
        const p = InMemoryProject.of({ path, content });
        await astUtils
            .fileMatches(p, {
                parseWith: JavaFileParser,
                globPatterns: AllJavaFiles,
                pathExpression: "//fieldDeclaration",
            })
            .then(fm => {
                assert(fm.length === 1);
                const varDecl = fm[0].matches[0];
                assert(varDecl.$offset === content.indexOf(variableDeclaration));
                assert(varDecl.$value === variableDeclaration);
                const newVariableDeclaration = 'String thing = "that"';
                varDecl.$value = newVariableDeclaration;
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(
                        f.getContentSync() === content.replace(variableDeclaration, newVariableDeclaration),
                        `Erroneous content: [${f.getContentSync()}]`,
                    );
                });
            });
    });
});

const ProblemFile1 = `
package com.av;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AardvarkApplication {

	public static void main(String[] args) {
		SpringApplication.run
	}
}
`;

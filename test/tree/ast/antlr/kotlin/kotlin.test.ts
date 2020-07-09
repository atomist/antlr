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
import { TreeVisitor, visit } from "@atomist/tree-path";
import * as assert from "power-assert";
import { KotlinFileParser, KotlinFiles } from "../../../../../lib/tree/ast/antlr/kotlin/KotlinFileParser";

describe("kotlin grammar", () => {
    it("should parse a file", done => {
        const f = new InMemoryProjectFile(
            "src/main/kotlin/Foo.kt",
            `package thing
fun main(args: Array<String>) {
    println("Hello, world!")
}`,
        );
        KotlinFileParser.toAst(f).then(() => done(), done);
    });

    it("should parse a file and keep positions", done => {
        const content = "import foo.bar.Baz\npublic class Foo { val i = 5;}";
        const f = new InMemoryProjectFile("src/main/kotlin/Foo.kt", content);
        let terminalCount = 0;
        KotlinFileParser.toAst(f)
            .then(root => {
                // console.log(JSON.stringify(root, null, 2));
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
            })
            .then(() => done(), done);
    });

    it("should get into AST", done => {
        const p = InMemoryProject.of({
            path: "src/main/kotlin/Foo.kt",
            content: "import foo.bar.Baz;\npublic class Foo { val i = 5;}",
        });
        astUtils
            .matches(p, {
                parseWith: KotlinFileParser,
                globPatterns: KotlinFiles,
                pathExpression: "//variableDeclaration//Identifier",
            })
            .then(matches => {
                assert(matches.length === 1);
                assert(matches[0].$value === "i");
            })
            .then(() => done(), done);
    });

    it("should get into AST and allow scalar navigation via properties", done => {
        const p = InMemoryProject.of({
            path: "src/main/kotlin/Foo.kt",
            content: "import foo.bar.Baz;\npublic class Foo { val i = 5;}",
        });
        astUtils
            .matches(p, {
                parseWith: KotlinFileParser,
                globPatterns: KotlinFiles,
                pathExpression: "//variableDeclaration//Identifier",
            })
            .then(matches => {
                assert(matches.length === 1);
                assert((matches[0] as any).$value === "i");
            })
            .then(() => done(), done);
    });

    it("should get into AST and update single terminal", done => {
        const path = "src/main/kotlin/Foo.kt";
        const content = "import foo.bar.Baz;\npublic class Foo { val i = 5;}";
        const p = InMemoryProject.of({ path, content });
        astUtils
            .fileMatches(p, {
                parseWith: KotlinFileParser,
                globPatterns: KotlinFiles,
                pathExpression: "//variableDeclaration//Identifier",
            })
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[0].$value = "xi";
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(
                        f.getContentSync() === content.replace("val i", "val xi"),
                        `Erroneous content after change: [${f.getContentSync()}]`,
                    );
                });
            })
            .then(() => done(), done);
    });

    it("should get into AST and update two terminals", done => {
        const path = "src/main/kotlin/Foo.kt";
        const content = "import foo.bar.Baz;\npublic class Foo { val i = 5; val x = 8.0; }";
        const p = InMemoryProject.of({ path, content });
        astUtils
            .fileMatches(p, {
                parseWith: KotlinFileParser,
                globPatterns: KotlinFiles,
                pathExpression: "//variableDeclaration//Identifier",
            })
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[1].$value = "flibbertygibbit";
                target.matches[0].$value = "xi";
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    const expected = content.replace("val i", "val xi").replace("val x ", "val flibbertygibbit ");
                    assert(
                        f.getContentSync() === expected,
                        `Erroneous content: [${f.getContentSync()}]\nvs\n[${expected}]`,
                    );
                });
            })
            .then(() => done(), done);
    });

    it("should get into AST and update single non-terminal", done => {
        const path = "src/main/kotlin/Foo.kt";
        const propertyDeclaration = "val i = 5;";
        const content = `import foo.bar.Baz;\npublic class Foo { ${propertyDeclaration}}`;
        const p = InMemoryProject.of({ path, content });
        astUtils
            .fileMatches(p, {
                parseWith: KotlinFileParser,
                globPatterns: KotlinFiles,
                pathExpression: "//propertyDeclaration",
            })
            .then(fm => {
                assert(fm.length === 1);
                const propDecl = fm[0].matches[0];
                assert(propDecl.$offset === content.indexOf(propertyDeclaration));
                assert(propDecl.$value === propertyDeclaration);
                const newVariableDeclaration = 'val thing = "that"';
                propDecl.$value = newVariableDeclaration;
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(
                        f.getContentSync() === content.replace(propertyDeclaration, newVariableDeclaration),
                        `Erroneous content after update: [${f.getContentSync()}]`,
                    );
                });
            })
            .then(() => done(), done);
    });
});

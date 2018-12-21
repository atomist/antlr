import {
    astUtils,
    InMemoryProject,
    InMemoryProjectFile,
} from "@atomist/automation-client";
import {
    TreeNode,
    TreeVisitor,
    visit,
} from "@atomist/tree-path";
import * as assert from "power-assert";
import { Java9FileParser, JavaFileParser } from "../../../../../lib/tree/ast/antlr/java/JavaFileParser";
import { stringifyTree } from "stringify-tree";

interface TreeNodeOutline {
    name: string;
    children: TreeNodeOutline[];
    value?: string;
}

function condenseSingleChild(tn: TreeNode) {
    if (tn.$children && tn.$children.length === 1 && tn.$children[0].$offset === tn.$offset) {
        const condenseChild = condenseSingleChild(tn.$children[0]);
        return {
            $children: condenseChild.$children,
            $value: tn.$value,
            $name: `${tn.$name}/${condenseChild.$name}`,
            $offset: tn.$offset,
        };
    }

    return {
        $children: tn.$children,
        $name: tn.$name,
        $offset: tn.$offset,
        $value: tn.$value,
    };
}

function stn(tn1) {
    const tn = condenseSingleChild(tn1);
    const children = (tn.$children || []).map(stn);
    return {
        $name: `${tn.$offset} ${tn.$name}`,
        $offset: tn.$offset,
        $children: children,
        $value: children.length > 0 ? undefined : tn.$value,
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
        const f = new InMemoryProjectFile("src/main/java/Foo.java", "import foo.bar.Baz;\npublic class Foo { int i = 5;}");
        const ast = await JavaFileParser.toAst(f);
        assert.strictEqual(ast.$name, "compilationUnit");
    });

    it("should parse a file with a lambda with Java9Parser", async () => {
        const f = new InMemoryProjectFile("src/main/java/Foo.java", JavaWithLambda);
        const ast = await Java9FileParser.toAst(f);
        // console.log(JSON.stringify(stn(ast)));
        assert.strictEqual(ast.$name, "compilationUnit");
    }).timeout(4000);

    it("should parse problematic source code", async () => {
        const f = new InMemoryProjectFile("src/main/java/com/av/AardvarkApplication.java",
            ProblemFile1);
        const ast = await JavaFileParser.toAst(f);
        assert.strictEqual(ast.$name, "compilationUnit");
    });

    it("should parse a file and keep positions", async () => {
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5;}";
        const f = new InMemoryProjectFile("src/main/java/Foo.java", content);
        let terminalCount = 0;
        await JavaFileParser.toAst(f)
            .then(root => {
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
        const p = InMemoryProject.of(
            { path: "src/main/java/Foo.java", content: "import foo.bar.Baz;\npublic class Foo { int i = 5;}" });
        astUtils.findMatches(p, JavaFileParser, AllJavaFiles, "//thisDoesntExist/Identifier")
            .then(() => assert.fail("should have thrown an error"), err => {
                assert(err.message.includes("thisDoesntExist"));
            });
    });

    it("should get into AST", async () => {
        const p = InMemoryProject.of(
            { path: "src/main/java/Foo.java", content: "import foo.bar.Baz;\npublic class Foo { int i = 5;}" });
        await astUtils.findMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId/Identifier")
            .then(matches => {
                assert(matches.length === 1);
                assert(matches[0].$value === "i");
            });
    });

    it("should get into AST and allow scalar navigation via properties", async () => {
        const p = InMemoryProject.of(
            { path: "src/main/java/Foo.java", content: "import foo.bar.Baz;\npublic class Foo { int i = 5;}" });
        await astUtils.findMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId")
            .then(matches => {
                assert(matches.length === 1);
                assert((matches[0] as any).Identifier === "i");
            });
    });

    it("should get into AST and update single terminal", async () => {
        const path = "src/main/java/Foo.java";
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5;}";
        const p = InMemoryProject.of(
            { path, content });
        await astUtils.findFileMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId/Identifier")
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[0].$value = "xi";
                return p.flush().then(() => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace("int i", "int xi"),
                        `Erroneous content: [${f.getContentSync()}]`);
                });
            });
    });

    it("should get into AST and update two terminals", async () => {
        const path = "src/main/java/Foo.java";
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5; float x = 8.0; }";
        const p = InMemoryProject.of(
            { path, content });
        await astUtils.findFileMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId/Identifier")
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[1].$value = "flibbertygibbit";
                target.matches[0].$value = "xi";
                return p.flush().then(() => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content
                        .replace("int i", "int xi")
                        .replace("float x", "float flibbertygibbit"),
                        `Erroneous content: [${f.getContentSync()}]`);
                });
            });
    });

    it("should get into AST and update single non-terminal", async () => {
        const path = "src/main/java/Foo.java";
        const variableDeclaration = "int i = 5;";
        const content = `import foo.bar.Baz;\npublic class Foo { ${variableDeclaration}}`;
        const p = InMemoryProject.of(
            { path, content });
        await astUtils.findFileMatches(p, JavaFileParser, AllJavaFiles, "//fieldDeclaration")
            .then(fm => {
                assert(fm.length === 1);
                const varDecl = fm[0].matches[0];
                assert(varDecl.$offset === content.indexOf(variableDeclaration));
                assert(varDecl.$value === variableDeclaration);
                const newVariableDeclaration = 'String thing = "that"';
                varDecl.$value = newVariableDeclaration;
                return p.flush().then(() => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace(variableDeclaration, newVariableDeclaration),
                        `Erroneous content: [${f.getContentSync()}]`);
                });
            });
    });

    it("should work on package", async () => {
        const path = "src/main/java/foo/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "package foo.bar.baz;\npublic class Thing {}"),
        );
        const ast = await Java9FileParser.toAst(p.findFileSync(path));
        console.log("PRINT THE TREE:");
        console.log(stringifyTree<TreeNode>
            (stn(ast), treeNodeName, treeNodeChildren));
        const matches = await astUtils.findMatches(p, Java9FileParser, path, "//packageDeclaration");
        assert.equal(matches.length, 1);
        assert.equal(matches[0].$children.length, 2);
        // assert.strictEqual(pi.fqn, "foo.bar");
        // assert.strictEqual(pi.insertAfter, pi.offset + "package foo.bar;".length);
    });
});

function treeNodeName(tn: TreeNode) {
    const endOffset = tn.$value ? ", " + (tn.$offset + tn.$value.length) : "";
    return `[${tn.$offset}${endOffset}] ${tn.$name}`;
}
function treeNodeChildren(tn: TreeNode): TreeNode[] {
    return tn.$children || [];
}

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

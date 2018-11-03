import {
    astUtils,
    InMemoryProject,
    InMemoryProjectFile,
} from "@atomist/automation-client";
import {
    TreeVisitor,
    visit,
} from "@atomist/tree-path";
import * as assert from "power-assert";
import { JavaFileParser } from "../../../../../lib/tree/ast/antlr/java/JavaFileParser";

const AllJavaFiles = "**/*.java";

describe("java grammar", () => {

    it("should parse a file", async () => {
        const f = new InMemoryProjectFile("src/main/java/Foo.java", "import foo.bar.Baz;\npublic class Foo { int i = 5;}");
        const ast = await JavaFileParser.toAst(f);
        assert.strictEqual(ast.$name, "compilationUnit");
    });


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
        JavaFileParser.toAst(f)
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
        astUtils.findMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId/Identifier")
            .then(matches => {
                assert(matches.length === 1);
                assert(matches[0].$value === "i");
            });
    });

    it("should get into AST and allow scalar navigation via properties", done => {
        const p = InMemoryProject.of(
            { path: "src/main/java/Foo.java", content: "import foo.bar.Baz;\npublic class Foo { int i = 5;}" });
        astUtils.findMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId")
            .then(matches => {
                assert(matches.length === 1);
                assert((matches[0] as any).Identifier === "i");
            }).then(() => done(), done);
    });

    it("should get into AST and update single terminal", done => {
        const path = "src/main/java/Foo.java";
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5;}";
        const p = InMemoryProject.of(
            { path, content });
        astUtils.findFileMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId/Identifier")
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[0].$value = "xi";
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace("int i", "int xi"),
                        `Erroneous content: [${f.getContentSync()}]`);
                });
            }).then(() => done(), done);
    });

    it("should get into AST and update two terminals", done => {
        const path = "src/main/java/Foo.java";
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5; float x = 8.0; }";
        const p = InMemoryProject.of(
            { path, content });
        astUtils.findFileMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId/Identifier")
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[1].$value = "flibbertygibbit";
                target.matches[0].$value = "xi";
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content
                        .replace("int i", "int xi")
                        .replace("float x", "float flibbertygibbit"),
                        `Erroneous content: [${f.getContentSync()}]`);
                });
            }).then(() => done(), done);
    });

    it("should get into AST and update single non-terminal", done => {
        const path = "src/main/java/Foo.java";
        const variableDeclaration = "int i = 5;";
        const content = `import foo.bar.Baz;\npublic class Foo { ${variableDeclaration}}`;
        const p = InMemoryProject.of(
            { path, content });
        astUtils.findFileMatches(p, JavaFileParser, AllJavaFiles, "//fieldDeclaration")
            .then(fm => {
                assert(fm.length === 1);
                const varDecl = fm[0].matches[0];
                assert(varDecl.$offset === content.indexOf(variableDeclaration));
                assert(varDecl.$value === variableDeclaration);
                const newVariableDeclaration = 'String thing = "that"';
                varDecl.$value = newVariableDeclaration;
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace(variableDeclaration, newVariableDeclaration),
                        `Erroneous content: [${f.getContentSync()}]`);
                });
            }).then(() => done(), done);
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

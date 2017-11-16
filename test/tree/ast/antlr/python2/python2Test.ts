import { InMemoryFile } from "@atomist/automation-client/project/mem/InMemoryFile";
import "mocha";
import * as assert from "power-assert";

import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import { findMatches } from "@atomist/automation-client/tree/ast/astUtils";
import { DefaultTreeNodeReplacer } from "@atomist/tree-path/TreeNode";

import { TreeVisitor, visit } from "@atomist/tree-path/visitor";
import { Python2FileParser, PythonFiles } from "../../../../../src/tree/ast/antlr/python2/Python2FileParser";

describe("python 2 grammar", () => {

    it("should parse a file", done => {
        const f = new InMemoryFile("src/Foo.py", "print 'Hello, world!'");
        Python2FileParser.toAst(f)
            .then(root => {
                done();
            }).catch(done);
    });

    it("should parse a file and keep positions", done => {
        const content = "print 'Hello, world!'";
        const f = new InMemoryFile("src/Foo.py", content);
        let terminalCount = 0;
        Python2FileParser.toAst(f)
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
                done();
            }).catch(done);
    });

    it("should get into AST", done => {
        const p = InMemoryProject.of(
            {path: "src/Foo.py", content: "name = raw_input('What is your name?\\n')\n" +
            "print 'Hi, %s.' % name"});
        findMatches(p, Python2FileParser, PythonFiles, "//file_input")
            .then(matches => {
                assert(matches.length === 1);
                console.log(JSON.stringify(matches[0], DefaultTreeNodeReplacer, 2));
                assert(matches[0].$value === "name");
                done();
            }).catch(done);
    });

    /*
    it("should get into AST and allow scalar navigation via properties", done => {
        const p = InMemoryProject.of(
            {path: "src/main/java/Foo.java", content: "import foo.bar.Baz;\npublic class Foo { int i = 5;}"});
        findMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId")
            .then(matches => {
                assert(matches.length === 1);
                assert((matches[0] as any).Identifier === "i");
                done();
            }).catch(done);
    });

    it("should get into AST and update single terminal", done => {
        const path = "src/main/java/Foo.java";
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5;}";
        const p = InMemoryProject.of(
            {path, content});
        findFileMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId/Identifier")
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[0].$value = "xi";
                p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace("int i", "int xi"),
                        `Erroneous content: [${f.getContentSync()}]`);
                    done();
                });
            }).catch(done);
    });

    it("should get into AST and update two terminals", done => {
        const path = "src/main/java/Foo.java";
        const content = "import foo.bar.Baz;\npublic class Foo { int i = 5; float x = 8.0; }";
        const p = InMemoryProject.of(
            {path, content});
        findFileMatches(p, JavaFileParser, AllJavaFiles, "//variableDeclaratorId/Identifier")
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[1].$value = "flibbertygibbit";
                target.matches[0].$value = "xi";
                p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content
                        .replace("int i", "int xi")
                        .replace("float x", "float flibbertygibbit"),
                        `Erroneous content: [${f.getContentSync()}]`);
                    done();
                });
            }).catch(done);
    });

    it("should get into AST and update single non-terminal", done => {
        const path = "src/main/java/Foo.java";
        const variableDeclaration = "int i = 5;";
        const content = `import foo.bar.Baz;\npublic class Foo { ${variableDeclaration}}`;
        const p = InMemoryProject.of(
            {path, content});
        findFileMatches(p, JavaFileParser, AllJavaFiles, "//fieldDeclaration")
            .then(fm => {
                assert(fm.length === 1);
                const varDecl = fm[0].matches[0];
                assert(varDecl.$offset === content.indexOf(variableDeclaration));
                assert(varDecl.$value === variableDeclaration);
                const newVariableDeclaration = 'String thing = "that"';
                varDecl.$value = newVariableDeclaration;
                p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace(variableDeclaration, newVariableDeclaration),
                        `Erroneous content: [${f.getContentSync()}]`);
                    done();
                });
            }).catch(done);
    });
    */

});

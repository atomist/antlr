import { InMemoryFile } from "@atomist/automation-client/project/mem/InMemoryFile";
import "mocha";
import * as assert from "power-assert";

import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import { findFileMatches, findMatches } from "@atomist/automation-client/tree/ast/astUtils";

import { TreeVisitor, visit } from "@atomist/tree-path/visitor";
import { KotlinFileParser, KotlinFiles } from "../../../../../lib/tree/ast/antlr/kotlin/KotlinFileParser";

describe("kotlin grammar", () => {

    it("should parse a file", done => {
        const f = new InMemoryFile("src/main/kotlin/Foo.kt",
            `package thing
fun main(args: Array<String>) {
    println("Hello, world!")
}`);
        KotlinFileParser.toAst(f)
            .then(root => {
                done();
            }).catch(done);
    });

    it("should parse a file and keep positions", done => {
        const content = "import foo.bar.Baz\npublic class Foo { val i = 5;}";
        const f = new InMemoryFile("src/main/kotlin/Foo.kt", content);
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
                done();
            }).catch(done);
    });

    it("should get into AST", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/kotlin/Foo.kt",
                content: "import foo.bar.Baz;\npublic class Foo { val i = 5;}",
            });
        findMatches(p, KotlinFileParser, KotlinFiles,
            "//variableDeclaration//Identifier")
            .then(matches => {
                assert(matches.length === 1);
                assert(matches[0].$value === "i");
                done();
            }).catch(done);
    });

    it("should get into AST and allow scalar navigation via properties", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/kotlin/Foo.kt",
                content: "import foo.bar.Baz;\npublic class Foo { val i = 5;}",
            });
        findMatches(p, KotlinFileParser, KotlinFiles,
            "//variableDeclaration//Identifier")
            .then(matches => {
                assert(matches.length === 1);
                assert((matches[0] as any).$value === "i");
                done();
            }).catch(done);
    });

    it("should get into AST and update single terminal", done => {
        const path = "src/main/kotlin/Foo.kt";
        const content = "import foo.bar.Baz;\npublic class Foo { val i = 5;}";
        const p = InMemoryProject.of(
            {path, content});
        findFileMatches(p, KotlinFileParser, KotlinFiles,
            "//variableDeclaration//Identifier")
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[0].$value = "xi";
                p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace("val i", "val xi"),
                        `Erroneous content after change: [${f.getContentSync()}]`);
                    done();
                });
            }).catch(done);
    });

    it("should get into AST and update two terminals", done => {
        const path = "src/main/kotlin/Foo.kt";
        const content = "import foo.bar.Baz;\npublic class Foo { val i = 5; val x = 8.0; }";
        const p = InMemoryProject.of(
            {path, content});
        findFileMatches(p, KotlinFileParser, KotlinFiles,
            "//variableDeclaration//Identifier")
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[1].$value = "flibbertygibbit";
                target.matches[0].$value = "xi";
                p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    const expected = content
                        .replace("val i", "val xi")
                        .replace("val x ", "val flibbertygibbit ");
                    assert(f.getContentSync() === expected,
                        `Erroneous content: [${f.getContentSync()}]\nvs\n[${expected}]`);
                    done();
                });
            }).catch(done);
    });

    it("should get into AST and update single non-terminal", done => {
        const path = "src/main/kotlin/Foo.kt";
        const propertyDeclaration = "val i = 5;";
        const content = `import foo.bar.Baz;\npublic class Foo { ${propertyDeclaration}}`;
        const p = InMemoryProject.of(
            {path, content});
        findFileMatches(p, KotlinFileParser, KotlinFiles,
            "//propertyDeclaration")
            .then(fm => {
                assert(fm.length === 1);
                const propDecl = fm[0].matches[0];
                assert(propDecl.$offset === content.indexOf(propertyDeclaration));
                assert(propDecl.$value === propertyDeclaration);
                const newVariableDeclaration = 'val thing = "that"';
                propDecl.$value = newVariableDeclaration;
                p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace(propertyDeclaration, newVariableDeclaration),
                        `Erroneous content after update: [${f.getContentSync()}]`);
                    done();
                });
            }).catch(done);
    });

});

import "mocha";
import * as assert from "power-assert";

import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import { findFileMatches } from "@atomist/automation-client/tree/ast/astUtils";
import { JavaFileParser } from "../../../../../src/tree/ast/antlr/java/JavaFileParser";

const AllJavaFiles = "**/*.java";

describe("java review/edit", () => {

    it("should find and remove unnecessary component scan annotation", done => {
        const path = "src/main/java/Foo.java";
        const content = "public @SpringBootApplication @ComponentScan class MyApp {}";
        const p = InMemoryProject.of(
            {path, content});
        // TODO use zapAllMatches
        findFileMatches(p, JavaFileParser, AllJavaFiles,
            `//typeDeclaration[/classDeclaration]
                 [//annotation[@value='@SpringBootApplication']]
                 //annotation[@value='@ComponentScan']`)
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[0].$value = "";
                p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace("@ComponentScan", ""),
                        `Erroneous content: [${f.getContentSync()}]`);
                    done();
                });
            }).catch(done);
    });

    it("should remove input");
});

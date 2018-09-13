import * as assert from "power-assert";

import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import { findFileMatches } from "@atomist/automation-client/tree/ast/astUtils";
import { JavaFileParser } from "../../../../../lib/tree/ast/antlr/java/JavaFileParser";

// LoggingConfig.format = "cli";
// (logger as any).level = process.env.LOG_LEVEL || "info";

const AllJavaFiles = "**/*.java";

describe("java review/edit", () => {

    it("should find and remove unnecessary component scan annotation", done => {
        const path = "src/main/java/Foo.java";
        const content = "public @SpringBootApplication @ComponentScan class MyApp {}";
        const p = InMemoryProject.of(
            { path, content });
        // TODO use zapAllMatches
        findFileMatches(p, JavaFileParser, AllJavaFiles,
            `//typeDeclaration[/classDeclaration]
                 [//annotation[@value='@SpringBootApplication']]
                 //annotation[@value='@ComponentScan']`)
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[0].$value = "";
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(f.getContentSync() === content.replace("@ComponentScan", ""),
                        `Erroneous content: [${f.getContentSync()}]`);
                });
            }).then(() => done(), done);
    });

    it("should remove input");
});

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

import * as assert from "power-assert";
import { fileMatches } from "@atomist/automation-client/lib/tree/ast/astUtils";
import { InMemoryProject } from "@atomist/automation-client/lib/project/mem/InMemoryProject";
import { JavaFileParser } from "../../../../../lib/tree/ast/antlr/java/JavaFileParser";

// LoggingConfig.format = "cli";
// (logger as any).level = process.env.LOG_LEVEL || "info";

const AllJavaFiles = "**/*.java";

describe("java review/edit", () => {
    it("should find and remove unnecessary component scan annotation", done => {
        const path = "src/main/java/Foo.java";
        const content = "public @SpringBootApplication @ComponentScan class MyApp {}";
        const p = InMemoryProject.of({ path, content });
        // TODO use zapAllMatches
        fileMatches(p, {
            parseWith: JavaFileParser,
            globPatterns: AllJavaFiles,
            pathExpression: `//typeDeclaration[/classDeclaration]
                 [//annotation[@value='@SpringBootApplication']]
                 //annotation[@value='@ComponentScan']`,
        })
            .then(fm => {
                assert(fm.length === 1);
                const target = fm[0];
                target.matches[0].$value = "";
                return p.flush().then(_ => {
                    const f = p.findFileSync(path);
                    assert(
                        f.getContentSync() === content.replace("@ComponentScan", ""),
                        `Erroneous content: [${f.getContentSync()}]`,
                    );
                });
            })
            .then(() => done(), done);
    });

    it("should remove input");
});

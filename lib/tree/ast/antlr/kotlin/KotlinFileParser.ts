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

import { FileParser } from "@atomist/automation-client/lib/tree/ast/FileParser";
import { AntlrFileParser } from "../AntlrFileParser";
import { KotlinLexer } from "./antlr-gen/KotlinLexer";
import { KotlinParser } from "./antlr-gen/KotlinParser";

/**
 * Glob pattern for Kotlin source
 * @type {string}
 */
export const KotlinFiles = "**/*.kt";

export const KotlinFileParser: FileParser = new AntlrFileParser("kotlinFile", KotlinLexer, KotlinParser);

export const KotlinScriptParser: FileParser = new AntlrFileParser("script", KotlinLexer, KotlinParser);

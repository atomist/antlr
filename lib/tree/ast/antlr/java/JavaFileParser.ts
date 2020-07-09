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

import { JavaLexer } from "./antlr-gen/JavaLexer";
import { JavaParser } from "./antlr-gen/JavaParser";

import { Java9Lexer } from "./antlr-gen/Java9Lexer";
import { Java9Parser } from "./antlr-gen/Java9Parser";

/**
 * ANTLR-based parser for Java files. Also serves as an example of
 * how to integrate with ANTLR.
 */
export const JavaFileParser: FileParser = new AntlrFileParser("compilationUnit", JavaLexer, JavaParser);

/**
 * newer ANTLR-based parser for Java files. Also serves as an example of
 * how to integrate with ANTLR.
 */
export const Java9FileParser: FileParser = new AntlrFileParser("compilationUnit", Java9Lexer, Java9Parser);

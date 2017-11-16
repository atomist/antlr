import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { AntlrFileParser } from "../AntlrFileParser";
import { Python2Parser } from "./antlr-gen/Python2Parser";
import { Python2Lexer } from "./antlr-gen/Python2Lexer";

/**
 * Glob pattern for Python source
 * @type {string}
 */
export const PythonFiles = "**/*.py";

export const Python2FileParser: FileParser =
    new AntlrFileParser("file_input", Python2Lexer, Python2Parser);

// export const KotlinScriptParser: FileParser =
//     new AntlrFileParser("script", KotlinLexer, KotlinParser);

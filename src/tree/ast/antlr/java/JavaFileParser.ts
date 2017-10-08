import { File } from "@atomist/automation-client/project/File";

import { logger } from "@atomist/automation-client/internal/util/logger";

import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { fillInEmptyNonTerminalValues } from "@atomist/automation-client/tree/enrichment";
import { TreeNode } from "@atomist/automation-client/tree/TreeNode";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { TreeBuildingListener } from "../TreeBuildingListener";
import { JavaLexer } from "./antlr-gen/JavaLexer";
import { JavaParser } from "./antlr-gen/JavaParser";

/**
 * ANTLR-based parser for Java files. Also serves as an example of
 * how to integrate with ANTLR.
 * @type {{rootName: string; toAst: ((f: File) => Promise<TreeNode>)}}
 */
export const JavaFileParser: FileParser = {

    rootName: "compilationUnit",

    toAst(f: File): Promise<TreeNode> {
        return f.getContent()
            .then(content => {
                logger.debug("Parsing file [%s] using ANTLR grammar", f.path);
                const inputStream = new ANTLRInputStream(content);
                const lexer = new JavaLexer(inputStream);
                const tokenStream = new CommonTokenStream(lexer);
                const parser = new JavaParser(tokenStream);
                const mbl = new TreeBuildingListener(
                    i => JavaParser.ruleNames[i],
                    i => (JavaLexer as any)._SYMBOLIC_NAMES[i]);
                parser.addParseListener(mbl);
                const cu = parser.compilationUnit();
                // logger.debug(cu.toStringTree());
                fillInEmptyNonTerminalValues(mbl.root, content);
                return mbl.root;
            });
    },
};

import { TreeNode } from "@atomist/tree-path";

export interface FileParser {
    /**
       * Name of the top level production: name of the root TreeNode
       */
    rootName: string;

    /**
     * Parse a file, returning an AST
     * @param {File} f
     * @return {TN} root tree node
     */
    toAst(f: ProjectFile): Promise<TreeNode>;

}

export interface ProjectFile {

    getContent(): Promise<string>

}
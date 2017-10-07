import * as _ from "lodash";

import { logger } from "@atomist/automation-client/internal/util/logger";
import { TreeNode } from "@atomist/automation-client/tree/TreeNode";
import { ParserRuleContext } from "antlr4ts";
import { ErrorNode, ParseTreeListener, TerminalNode } from "antlr4ts/tree";

/**
 * Build Atomist automation-client-ts TreeNode from an ANTLR parse
 */
export class TreeBuildingListener implements ParseTreeListener {

    private nodeStack: BuildingTreeNode[] = [];

    /**
     *
     * @param {(i: number) => string} lookupRule lookup rule. grammar-specific
     * @param {(i: number) => string} lookupToken lookup token. lexer[specific
     */
    constructor(private lookupRule: (i: number) => string, private lookupToken: (i: number) => string) {
    }

    /**
     * Make the root node (from top level production) available after parsing
     * @return {TreeNode}
     */
    get root(): TreeNode {
        return this.nodeStack[0];
    }

    public visitTerminal(node: TerminalNode) {
        const name = this.lookupToken(node.symbol.type);
        // console.log("visitTerminal: %s:[%s]", lookupToken(node.symbol.tokenIndex), node.symbol.text);
        // console.log("visitTerminal: %s:[%s]", name, node.text);
        if (!!name && name.toUpperCase() !== name) {
            // Skip the keywords
            this.currentNode.addChild({
                $name: name,
                $value: node.text,
                $offset: node.symbol.startIndex,
            });
        }
    }

    public visitErrorNode(node: ErrorNode) {
        logger.warn("visitErrorNode: %s:[%s]", node.symbol, node.text);
    }

    public enterEveryRule(ctx: ParserRuleContext) {
        const name = this.lookupRule(ctx.ruleContext.ruleIndex);

        const thisRule = new BuildingTreeNode(name, ctx.start.startIndex);
        if (!!this.currentNode) {
            this.currentNode.addChild(thisRule);
        }
        this.nodeStack.push(thisRule);
    }

    public exitEveryRule(ctx: ParserRuleContext) {
        if (this.nodeStack.length > 1) {
            this.nodeStack.pop();
        }
    }

    private get currentNode() {
        return _.last(this.nodeStack);
    }

}

class BuildingTreeNode implements TreeNode {

    public $children: TreeNode[] = undefined;

    constructor(public $name: string, public $offset: number) {
    }

    public addChild(child: TreeNode) {
        if (!this.$children) {
            this.$children = [child];
        } else {
            this.$children.push(child);
        }
    }
}

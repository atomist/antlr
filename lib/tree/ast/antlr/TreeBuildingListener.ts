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

import { logger } from "@atomist/automation-client/lib/util/logger";
import { TreeNode } from "@atomist/tree-path";
import { ParserRuleContext } from "antlr4ts";
import { ErrorNode, ParseTreeListener, TerminalNode } from "antlr4ts/tree";
import * as _ from "lodash";

/* tslint:disable:max-classes-per-file */

/**
 * Build Atomist automation-client-ts TreeNode from an ANTLR parse
 */
export class TreeBuildingListener implements ParseTreeListener {
    private readonly nodeStack: MutableTreeNode[] = [];

    /**
     *
     * @param {(i: number) => string} lookupRule lookup rule. grammar-specific
     * @param {(i: number) => string} lookupToken lookup token. lexer[specific
     */
    constructor(
        private readonly lookupRule: (i: number) => string,
        private readonly lookupToken: (i: number) => string,
    ) {}

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
        if (!!name) {
            // Skip keywords
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

        const thisRule = new MutableTreeNode(name, ctx.start.startIndex);
        if (!!this.currentNode) {
            this.currentNode.addChild(thisRule);
        }
        this.nodeStack.push(thisRule);
    }

    public exitEveryRule(ctx: ParserRuleContext) {
        // Pop the stack unless we're already at the root,
        // so we can add any further siblings
        if (this.nodeStack.length > 1) {
            this.nodeStack.pop();
        }
    }

    private get currentNode() {
        return _.last(this.nodeStack);
    }
}

class MutableTreeNode implements TreeNode {
    public $children: TreeNode[];

    constructor(public $name: string, public $offset: number) {}

    public addChild(child: TreeNode) {
        if (!this.$children) {
            this.$children = [child];
        } else {
            this.$children.push(child);
        }
    }
}

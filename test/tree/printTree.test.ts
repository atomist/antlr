import { TreeNode } from "@atomist/tree-path";
import _ = require("lodash");
import assert = require("power-assert");
import { stringifyTree } from "./printTree";

describe("stringify", () => {
    it("prints one tree", () => {
        const tree = {
            name: "hi", children: [],
        };
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, "─ hi");
    });
    it("prints a tree with a child", () => {
        const tree = {
            name: "hi", children: [
                { name: "child1", children: [] },
            ],
        };
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, `┬ hi
└── child1`);
    });
    it("prints a tree with two children", () => {
        const tree = {
            name: "hi", children: [
                { name: "child1", children: [] },
                { name: "child2", children: [] },
            ],
        };
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, `┬ hi
├── child1
└── child2`);
    });
    it("prints a tree with great-grandchildren", () => {
        const tree = {
            name: "Grandmarti", children: [
                {
                    name: "Cyndi", children: [
                        {
                            name: "Jess", children: [
                                { name: "Evelyn", children: [] },
                                { name: "Linda", children: [] },
                            ],
                        },
                    ],
                },
                { name: "Celia", children: [] },
            ],
        };
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, `┬ Grandmarti
├─┬ Cyndi
│ └─┬ Jess
│   ├── Evelyn
│   └── Linda
└── Celia`);
    });

    it("prints a tree with two grandchildren", () => {
        const tree = {
            name: "Grandmarti", children: [
                {
                    name: "Cyndi", children: [
                        { name: "Jess", children: [] }
                        , { name: "Josh", children: [] },

                    ],
                },
                { name: "Celia", children: [] },
            ],
        };
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, `┬ Grandmarti
├─┬ Cyndi
│ ├── Jess
│ └── Josh
└── Celia`);
    });
});

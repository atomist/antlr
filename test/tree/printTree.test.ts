import { TreeNode } from "@atomist/tree-path";
import assert = require("power-assert");
import _ = require("lodash");

describe("stringify", () => {
    it("prints one tree", () => {
        const tree = {
            name: "hi", children: []
        }
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, "─ hi")
    })
    it("prints a tree with a child", () => {
        const tree = {
            name: "hi", children: [
                { name: "child1", children: [] }
            ]
        }
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, `┬ hi
└── child1`)
    })
    it("prints a tree with two children", () => {
        const tree = {
            name: "hi", children: [
                { name: "child1", children: [] },
                { name: "child2", children: [] }
            ]
        }
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, `┬ hi
├── child1
└── child2`)
    })
    it("prints a tree with great-grandchildren", () => {
        const tree = {
            name: "Grandmarti", children: [
                {
                    name: "Cyndi", children: [
                        {
                            name: "Jess", children: [
                                { name: "Evelyn", children: [] },
                                { name: "Linda", children: [] }
                            ]
                        }
                    ]
                },
                { name: "Celia", children: [] }
            ]
        }
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, `┬ Grandmarti
├─┬ Cyndi
│ └─┬ Jess
│   ├── Evelyn
│   └── Linda
└── Celia`)
    })

    it("prints a tree with two grandchildren", () => {
        const tree = {
            name: "Grandmarti", children: [
                {
                    name: "Cyndi", children: [
                        { name: "Jess", children: [] }
                        , { name: "Josh", children: [] }

                    ]
                },
                { name: "Celia", children: [] }
            ]
        }
        const result = stringifyTree(tree, t => t.name, t => t.children);
        console.log("tree:\n" + result);
        assert.deepEqual(result, `┬ Grandmarti
├─┬ Cyndi
│ ├── Jess
│ └── Josh
└── Celia`)
    })
})


export function stringifyTree<T>(tn: T, nameFn: (t: T) => string, childrenFn: (t: T) => T[]): string {

    function prefixChild(strs: string[], last: boolean): string[] {
        return strs.map((s, i) => {
            const prefix = i == 0 ? (last ? "└─" : "├─") : (last ? "  " : "│ ");
            return prefix + s;
        });
    }
    function nodeToStrings(tn: T, firstChild: boolean = false): string[] {
        const children = [...childrenFn(tn)]; // copy the array
        if (children.length === 0) {
            return ["─ " + nameFn(tn)]
        }
        return ["┬ " + nameFn(tn), ..._.flatten(children.map((c, i) => {
            const strs = nodeToStrings(c);
            return prefixChild(strs, i == (children.length - 1))
        }))]
    }

    return nodeToStrings(tn).join("\n");

}
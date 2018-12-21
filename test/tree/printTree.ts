import _ = require("lodash");

export function stringifyTree<T>(tn: T, nameFn: (t: T) => string, childrenFn: (t: T) => T[]): string {

    function prefixChild(strs: string[], last: boolean): string[] {
        return strs.map((s, i) => {
            const prefix = i === 0 ? (last ? "└─" : "├─") : (last ? "  " : "│ ");
            return prefix + s;
        });
    }
    function nodeToStrings(tn: T, firstChild: boolean = false): string[] {
        const children = [...childrenFn(tn)]; // copy the array
        if (children.length === 0) {
            return ["─ " + nameFn(tn)];
        }
        return ["┬ " + nameFn(tn), ..._.flatten(children.map((c, i) => {
            const strs = nodeToStrings(c);
            return prefixChild(strs, i === (children.length - 1));
        }))];
    }

    return nodeToStrings(tn).join("\n");

}

# @atomist/antlr-ts

Integration with [ANTLR for TypeScript](https://github.com/tunnelvisionlabs/antlr4ts) for Atomist automation [clients](https://github.com/atomist/automation-client-ts).

Includes Java support, in the `JavaFileParser` implementation of `FileParser`.
This enables running path expressions against Java files in
a consistent manner to other grammars.

See [overall path expression documentation](https://github.com/atomist/automation-client-ts/blob/master/docs/PathExpressions.md).

## Usage
First, create an instance of a `FileParser` or `FileParserRegistry`.

A `FileParser` knows how to parse files using a single grammar: for example, `MicrogrammarBasedFileParser` (from automation client) that uses a single microgrammar, or `JavaFileParser` from this project. A `FileParserRegistry` can accommodate multiple `FileParser` instances, determining whichever is appropriate to execute a given path expression.

Then use the `findMatches` method in `astUtils`, which has the following signature:

```typescript
export function findMatches(p: ProjectNonBlocking,
                            globPattern: string,
                            parserOrRegistry: FileParser | FileParserRegistry,
                            pathExpression: string | PathExpression): Promise<TreeNode[]> {
```

The following example looks in all Java files in a project for a given path expression:

```typescript
findMatches(project, JavaFiles, JavaFileParser, 
    "//variableDeclaratorId/Identifier")
    .then(matches => {
        ...

```
Returned matches are updatable after project flushing.

## SPI: Integrating with other ANTLR grammars
This project includes support for Java using the [Java ANTLR grammar](../src/tree/ast/antlr/java/Java.g4).

To add support for other grammars, perform the following steps:

- Use the ANTLR CLI to generate the necessary files from the grammar. Modify the `antlr4ts` script in `package.json` to work with your grammar, then put the generated files in the appropriate directory. (You may need to reorder some of the generated code to eliminate forward references to ensure compilatation. If you are using `tslint` you may need to disable it for the generated sources.)
- Create an instance of `FileParser` to work with your grammar. Use `TreeBuildingListener` to do the work of building an Atomist `TreeNode` from the ANTLR parse tree.

Model your `FileParser` implementation on `JavaFileParser` in this project.

```typescript
export const JavaFileParser: FileParser = {
	
	// Return the name of the top level production
    rootName: "compilationUnit",

    toAst(f: File): Promise<TreeNode> {
        return f.getContent()
            .then(content => {
                logger.debug("Parsing file [%s] using ANTLR grammar", f.path);
                const inputStream = new ANTLRInputStream(content);
                const lexer = new JavaLexer(inputStream);
                const tokenStream = new CommonTokenStream(lexer);
                const parser = new JavaParser(tokenStream);
                
                // Construct TreeBuildingListener with lookup functions to resolve production names
                const mbl = new TreeBuildingListener(
                    i => JavaParser.ruleNames[i],
                    i => (JavaLexer as any)._SYMBOLIC_NAMES[i]);
                parser.addParseListener(mbl);
                
                // Retrieve root production
                const cu = parser.compilationUnit();
                
                // Ensure non-terminals have values set
                fillInEmptyNonTerminalValues(mbl.root, content);
                return mbl.root;
            });
    },
};
```

If your grammar requires Java or other code you may need to port that code to TypeScript. Please refer to ANTLR documentation in this case.

## Support

General support questions should be discussed in the `#support`
channel in our community Slack team
at [atomist-community.slack.com][slack].

If you find a problem, please create an [issue][].

[issue]: https://github.com/atomist/antlr-ts/issues

## Development

You will need to install [node][] to build and test this project.

### Build and Test

Command | Reason
------- | ------
`npm install` | to install all the required packages
`npm run start` | to start the Atomist automation client
`npm run lint` | to run tslint against the TypeScript
`npm run compile` | to compile all TypeScript into JavaScript
`npm test` | to run tests and ensure everything is working
`npm run autotest` | run tests continuously (you may also need to run `tsc -w`)
`npm run clean` | remove stray compiled JavaScript files and build directory

### Release

To create a new release of the project, simply push a tag of the form
`M.N.P` where `M`, `N`, and `P` are integers that form the next
appropriate [semantic version][semver] for release.  The version in
the package.json is replaced by the build and is totally ignored!  For
example:

[semver]: http://semver.org

```
$ git tag -a 1.2.3
$ git push --tags
```

The Travis CI build (see badge at the top of this page) will publish
the NPM module and automatically create a GitHub release using the tag
name for the release and the comment provided on the annotated tag as
the contents of the release notes.

---

Created by [Atomist][atomist].
Need Help?  [Join our Slack team][slack].

[atomist]: https://www.atomist.com/
[slack]: https://join.atomist.com

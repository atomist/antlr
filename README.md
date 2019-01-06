# @atomist/antlr

[![atomist sdm goals](http://badge.atomist.com/T29E48P34/atomist/antlr-ts/93a238be-3c16-456e-be12-76234a0caca5)](https://app.atomist.com/workspace/T29E48P34)
[![npm version](https://img.shields.io/npm/v/@atomist/antlr.svg)](https://www.npmjs.com/package/@atomist/antlr)

Integration with [ANTLR for TypeScript](https://github.com/tunnelvisionlabs/antlr4ts) for Atomist automation [clients](https://github.com/atomist/automation-client-ts).

ANTLR is a powerful parser generator, for which many grammars are available.

This enables running path expressions against ANTLR ASTs in
a consistent manner to ASTs produced by other grammars.

Includes Java support, in the `JavaFileParser` implementation of `FileParser`,
as an example, test and for actual Java support, as well as Kotlin support,
to show how to handle a grammar with a distinct lexer and parser.
Other ANTLR grammars can be integrated with Atomist
using this project as library, including offering an update model producing clean diffs.

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

## SPI: Supporting other ANTLR grammars

This project includes support for parsing Java using the [Java ANTLR grammar](../src/tree/ast/antlr/java/Java.g4).

There are [many available ANTLR grammars](https://github.com/antlr/grammars-v4), and the same approach can be used with most of them, making it possible to work with their ASTs in a consistent manner with Atomist.

To add support for another grammar, perform the following steps:

### Generate TypeScript

Use the ANTLR CLI to generate the necessary files from the grammar.
It is installed as a development dependency of this project.

If your grammar has a separate lexer, first generate the TypeScript
for that.  In this example, we'll use the Kotlin grammar.

```
$ ./node_modules/.bin/antlr4ts -visitor lib/tree/ast/antlr/kotlin/KotlinLexer.g4
```

Then generate the TypeScript for the parser.

``` 
$ ./node_modules/.bin/antlr4ts -lib lib/tree/ast/antlr/kotlin -visitor lib/tree/ast/antlr/kotlin/KotlinParser.g4
```

You may need to reorder some of the generated code to eliminate forward references to ensure compilation.
In your `antlr-gen/XXXXParser` file, reorder to put all classes _before_ the `XXXXParser` class.

If you are using `tslint` you may need to disable it for the generated sources as
in this project.

Note that antlr4ts is written in Java, and `npm` only wraps it, so
you'll need a recent JVM. A JVM is _not_ needed to execute the resulting
grammar, which is pure TypeScript. Documentation for the ANTLR CLI is
[here](https://github.com/antlr/antlr4/blob/master/doc/tool-options.md).

### Create a FileParser Implementation to Integrate your Grammar with your Atomist Automation Client

Create an instance of `FileParser` to work with your grammar. Use `TreeBuildingListener` to do the work of building an Atomist `TreeNode` from the ANTLR parse tree.

Create your `FileParser` in the style of `JavaFileParser` in this project,
passing the top level production name and the lexer and parser classes.

```typescript
const JavaFileParser = new AntlrFileParser("compilationUnit", JavaLexer, JavaParser);
```

If your grammar uses Java or other code you may need to port that code to JavaScript or TypeScript.
Please refer to ANTLR documentation in this case.
Please validate your grammar with an IDE plugin or other tool before generating code and attempting
integration.

## Support

General support questions should be discussed in the `#support`
channel in the [Atomist community Slack workspace][slack].

If you find a problem, please create an [issue][].

[issue]: https://github.com/atomist/antlr-ts/issues

## Development

You will need to install [Node.js][node] to build and test this
project.

[node]: https://nodejs.org/ (Node.js)

### Build and test

Install dependencies.

```
$ npm install
```

Use the `build` package script to compile, test, lint, and build the
documentation.

```
$ npm run build
```

### Release

Releases are handled via the [Atomist SDM][atomist-sdm].  Just press
the 'Approve' button in the Atomist dashboard or Slack.

[atomist-sdm]: https://github.com/atomist/atomist-sdm (Atomist Software Delivery Machine)

---

Created by [Atomist][atomist].
Need Help?  [Join our Slack workspace][slack].

[atomist]: https://atomist.com/ (Atomist - How Teams Deliver Software)
[slack]: https://join.atomist.com/ (Atomist Community Slack)

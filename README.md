# @atomist/antlr

[![Build Status](https://travis-ci.org/atomist/antlr-ts.svg?branch=master)](https://travis-ci.org/atomist/antlr-ts)

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

Install the ANTLR CLI wrapper in `package.json` as follows:

```
 "antlr4ts-cli": "^0.4.0-alpha.4",

```

Create an `antlr4ts` script in `package.json` to work with your grammar.

```bash
    "antlr4ts": "antlr4ts -visitor src/tree/ast/antlr/scala/Scala.g4 && mv src/tree/ast/antlr/scala/*.ts src/tree/ast/antlr/scala/antlr-gen && mv src/tree/ast/antlr/scala/*.tokens src/tree/ast/antlr/scala/antlr-gen",

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

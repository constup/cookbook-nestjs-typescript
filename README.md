# NodeJS TypeScript cookbook

## Short Description

This is a collection of samples related to NodeJS and NestJS with TypeScript. This repository is built as a NestJS 
project and can be installed and run like any other NestJS project.

Quickstart and reference: [Table of contents](./doc/table_of_contents.md)

The following main technologies are covered (all in TypeScript):

- Vanilla NodeJS
- NestJS

See the Long description below for more details.

## Installation

### Prerequisites

- NodeJS 16 ([Official Download and installation instructions](https://nodejs.org/en/download/))
- NestJS CLI 9 ([Official Download and installation instructions](https://docs.nestjs.com/))

### Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

### Jest

Jest tests are available for each example in the same directory. These files are named `*.spec.ts`.

### JetBrains HTTP Client tests

Examples contain `*.http` files which can be opened in and used by JetBrains IDEs 
([WebStorm](https://www.jetbrains.com/webstorm/), [PHPStorm](https://www.jetbrains.com/phpstorm/)). These files contain 
commands which can be run by JetBrains HTTP Client (built into the IDE).

Examples in this repository are all showcased in controllers. This is done so that you can actually run the example code
without doing anything extra - no tests, no mocks, just running the examples directly as if it's a production 
application. You can also use the Debugger in your IDE and execute the code step by step if you want to.

Some examples require additional data to be passed to controllers (like: examples of HTTP POST requests with data 
payloads) and you can't easily do that in your browser. Each example and each controller is covered with JetBrains HTTP 
Client requests with sample payloads already prepared, so that you can just click on "run" and see the code in action, 
right from your IDE.

## Long description

All web applications, regardless of the language they are written in, have a set of core building blocks - like sending
and receiving HTTP requests, reading environment variables and configuration values, handling controllers and CLI 
commands... This project organizes examples in categories (directories/folders) with each category representing one of 
these building blocks.

The main idea behind this project is learning by examples. Intended audience are:

- Experienced programmers specialized in other languages or technologies who want to expand their toolset;
  - By organizing examples in building block categories, experienced programmers, who are already well familiar with 
    application building blocks but are coming from a different language (for example PHP or Java), can easily jump in 
    and use Node and Nest while catching up with the syntax on the go.
- Inexperienced programmers who want to have simple examples to go with the theory and official documentation;
  - Reading theory and official documentation is good. Having concrete runnable examples to go along with the theory and
    official documentation is better. Just remember that this project is only accompanying official documentation and is
    not intended to be used alone.
- All programmers to have a simple how-to examples to help them be more productive in their daily work;
  - Instead of searching StackOverflow, read it here. The answers you can find here are all covered with tests which you 
    can run and modify to your needs. You can also play with the code directly, if you need to test a specific idea or
    requirement from your daily work.

## Contribution

You are free to contribute to this repository, either by expanding existing examples or adding your own. There are,
however, certain rules to follow in order to keep the examples consistent and easy to use. You can read more about it in
[Contribution guidelines](./doc/contribution_guidelines.md).

## License

GNU GPL 3.0

Full license is available in [LICENSE](./LICENSE) file.

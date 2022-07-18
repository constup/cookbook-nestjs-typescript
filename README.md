# NodeJS cookbook

## Short Description

This is a collection of samples related to NodeJS and NestJS with TypeScript. This repository is built as a NestJS 
project and can be installed and run like any other NestJS project.

Quickstart and reference: [Table of contents](./doc/table_of_contents.md)

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

Jest tests are available for each example in the same directory. Jest tests files are named `*.spec.ts`.

### JetBrains HTTP Client tests

Each example is covered with `*.http` file which can be opened in and used by JetBrains IDEs (WebStorm, PHPStorm).

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

## License

GNU GPL 3.0

Full license is available in [LICENSE](./LICENSE) file.

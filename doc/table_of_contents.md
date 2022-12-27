# Table of contents

## Legend

Please follow this structure when adding to this _Table of contents_:

- **Master category, language, framework or library** or [**Master category, language, framework or library**](table_of_contents.md)
  - ***Topic or feature*** or [***Topic or feature***](table_of_contents.md)
    - [Main directory of examples](table_of_contents.md)
      - [_Helper files_](table_of_contents.md)
      - _Topics covered by examples_

## Table of contents

- **TypeScript**
  - ***Classes and Objects***
    - [Class samples (showcase only, used in other concrete examples)](../src/typescript/classes-and-objects/class-samples/)
      - [_Classic immutable object_](../src/typescript/classes-and-objects/class-samples/classic-immutable-object.ts)
      - [_Encapsulated class_](../src/typescript/classes-and-objects/class-samples/encapsulated-class.ts)
    - [Class properties](../src/typescript/classes-and-objects/class-properties)
      - [_Shorthand constructor_](../src/typescript/classes-and-objects/class-properties/shorthand-constructor/shorthand-constructor.ts)
    - [Immutable objects](../src/typescript/classes-and-objects/immutable-objects)
  - ***Promises***
    - ***Creation and basic use***
      - [Simple promise returning string](../src/typescript/promises/creation-and-basic-use/01-simple-promise-returning-string)
      - [Promise returning object](../src/typescript/promises/creation-and-basic-use/02-promise-returning-simple-data-object)
      - [Promise returning different types in resolve() and reject()](../src/typescript/promises/creation-and-basic-use/03-promise-returning-different-types)
      - [Promise returning a function](../src/typescript/promises/creation-and-basic-use/04-promise-returning-function)
      - [Promise returning other promise](../src/typescript/promises/creation-and-basic-use/05-promise-returning-other-promise)
    - ***then(), catch() and finally()***
      - [Simple use of then()](../src/typescript/promises/then-catch-finally/simple-use-of-then)
  - ***async/await vs new Promise()/Promise.then()***
    - [Async and Promise creation and use](../src/typescript/async-await-vs-promises/async-and-promise-creation-and-use)
- **NodeJS**
- **NodeJS libraries**
  - [UUID libraries](../src/nodejs-libraries/uuid-libraries)
  - **Axios**
    - [***Interceptors***](../src/nodejs-libraries/axios/interceptors/README.md)
- **NestJS**
  - **Version 9**
    - ***Controllers and commands***
      - ***Controllers***
        - [Sample base controller](../src/nestjs/version-9/controllers-and-commands/controllers/sample-base)
    - ***Framework constructs***
      - [Providers](../src/nestjs/version-9/framework-constructs/providers/README.md)
        - [Interfaces as provider properties](../src/nestjs/version-9/framework-constructs/providers/interfaces-as-properties)
        - [Non-injectable classes as provider properties](../src/nestjs/version-9/framework-constructs/providers/non-injectable-classes-as-properties)
        - [Other providers as provider properties](../src/nestjs/version-9/framework-constructs/providers/other-providers-as-properties)
        - [Scalar properties with default values as provider properties](../src/nestjs/version-9/framework-constructs/providers/scalar-properties-default-values)
        - [Scalar properties without default values as provider properties](../src/nestjs/version-9/framework-constructs/providers/scalar-properties-no-default)
    - ***Getting data***
      - ***Configuration***
        - ***Environment variables***
          - [Env files](../src/nestjs/version-9/getting-data/configuration/environment-variables)
          - [Environment variables](../src/nestjs/version-9/getting-data/configuration/environment-variables/environment-variables)
    - ***HTTP***
      - ***HTTP Requests***
        - ***Incoming***
          - [Read HTTP headers](../src/nestjs/version-9/http/http-requests/incoming/http-headers)
          - ***Read request payload***
            - [URL parameters (?sample01="test"&sample02=123)](../src/nestjs/version-9/http/http-requests/incoming/read-request-payload/url-parameters)
            - [POST payload](../src/nestjs/version-9/http/http-requests/incoming/read-request-payload/post-payload)
            - [Mix POST and GET payloads](../src/nestjs/version-9/http/http-requests/incoming/read-request-payload/mix-post-get-payloads)
        - ***Outgoing***
          - [Make simple GET request](../src/nestjs/version-9/http/http-requests/outgoing/make-get-request)
          - [Make simple POST request](../src/nestjs/version-9/http/http-requests/outgoing/make-post-request)
      - ***HTTP Responses***
        - [Simple JSON response](../src/nestjs/version-9/http/http-responses/simple-json-response)
- **Testing**
  - **Jest**
    - [Constructor and `new SomeClass(parameter)`](../src/testing/jest/new)
- **Mocks**
  - [Sample third party server mock](../src/mocks/sample-third-party-server)
    - _Username and password to authentication token mock_
    - _Endpoint mock which checks whether auth token is received, then sends a sample JSON payload as a response_

---

• [Home](../README.md)
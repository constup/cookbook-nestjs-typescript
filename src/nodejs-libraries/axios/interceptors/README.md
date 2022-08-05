# Axios Interceptors

## Official documentation

[https://axios-http.com/docs/interceptors](https://axios-http.com/docs/interceptors)

## Using this example

### Overview

When making a request with Axios, you can handle pre-request and pre-response tasks in two ways:
  - by using classic Object-Oriented approach (services + dependency injection);
  - by using Axios Interceptors;

Our example implements both ways for exactly the same tasks, so you can compare them. The examples are making two API
calls to a mock server (provided by: [sample-third-party-server.controller.ts](../../../mocks/sample-third-party-server/sample-third-party-server.controller.ts)):
  - Call authentication endpoint, send credentials and receive authentication token;
  - Make an API call to fetch some data from the mock server by using the authentication token from the first call.

The main differences are visible in the following files:
  - [Classic OOP authentication token service](classic-oop-implementation/token-service.ts)
  - [Interceptors authentication token service](interceptor-implementation/token-service.ts)

### Details

This directory contains 3 subdirectories:

- [Common services](common-services) - Common services indirectly related to the main topic of this example. Implemented
  for demonstration purposes, in order and to show how and where you can inject your processing code. They also make the 
  main example more readable.
  - [Authentication response validator](common-services/auth-response-validator) - A simple validator of the 
    authentication response.
  - [Axios helper services](common-services/axios) - Axios instance factory.
  - [Credentials service](common-services/credentials-service) - Credentials service which reads API credentials from 
    the .env file. The variables are: `MOCK_AUTH_API_URL`, `MOCK_AUTH_API_USERNAME` and `MOCK_AUTH_API_PASSWORD`.
  - [Error processing service](common-services/error-processing-service) - A simple API error processing service. Picks 
    some fields from the `AxiosError` and logs it into console.
  - [Request token API service](common-services/request-token-api/request-token-api.ts) - A service to make an API call.
  - [Response processor](common-services/response-processor) - Processes API response, for example: performing data 
    validation.
  - [Types](common-services/type) - A directory containing types for these common services.
- [Interceptor implementation](interceptor-implementation) - An example of sending an authentication request and 
  processing it by using Axios interceptors.
- [Classic OOP implementation](classic-oop-implementation) - The same example as above, just implemented by using 
  classic Object-Oriented code style (without interceptors).
  - [**Token service**](classic-oop-implementation/token-service.ts) - The main token service which you would use in your 
    application.

> **Please note**: Common services implemented here are in no way full-featured. They are just made of some example 
> code which simply provides some basic functionality. You can disregard them when viewing this example and focus only
> on Interceptor and Classic OOP implementation examples.

> **Please note**: Source code written here does not represent an optimal solution for writing API requests or 
> organizing your code. The purpose of this example is to showcase different approaches when handling Axios requests, by
> comparing implementations of authentication token requests.

---

• [Home](../../../../README.md) | [Table of contents](../../../../doc/table_of_contents.md)
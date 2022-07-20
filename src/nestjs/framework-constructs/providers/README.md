# Providers

## Description

Providers are nothing more than plain OOP classes.

The term "providers" in NestJS is introduced because Nest does not have full-featured dependency injection 
implementation with autowiring (like Symfony, a PHP framework, has). To use dependency injection:
 - `@Injector()`decorator needs to be added to a class manually;
 - a provider must also be manually registered in the `app.module.ts` file. You need to add it to 
   `@Module({[providers: []})`

> Note: If you are developing your own application or framework, please don't introduce new terms for already existing
> things just because a feature is missing from your framework or application. In this case, classes, services and 
> Dependency Injection exist in many other languages and frameworks without any need to be called "providers" or 
> anything else.

## Examples

There are several examples here to address different types of classes (each in their own example folder):

- **[interfaces as properties](./interfaces-as-properties)**: An example of a provider with interfaces as properties.
- **[other providers as properties](./other-providers-as-properties)**: An example of a provider which has other 
  providers as its properties.
- **[non-injectable classes as properties](./non-injectable-classes-as-properties)**: An example of a provider which has
  other classes as properties. The classes are not marked as "injectable"
- **[scalar properties default values](./scalar-properties-default-values)**: An example of a provider with scalar 
  properties which have default values defined.
- **[scalar properties no default values](./scalar-properties-no-default)**: An example of a provider with scalar 
  properties and no default values defined.
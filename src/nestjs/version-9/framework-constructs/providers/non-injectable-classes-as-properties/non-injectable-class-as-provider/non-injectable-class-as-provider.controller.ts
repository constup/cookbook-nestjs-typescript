import { Controller, Get } from '@nestjs/common';
import { NonInjectableClassAsProvider } from '../non-injectable-class-as-provider';

@Controller('non-injectable-class-as-provider')
export class NonInjectableClassAsProviderController {
    constructor(
    private nonInjectableClassAsProvider: NonInjectableClassAsProvider,
    ) {}

  /**
   * This will throw the following error:
   *    ERROR [ExceptionsHandler] Cannot read properties of undefined (reading 'doSomethingElse')
   */
  @Get()
    doSomething(): string {
        return this.nonInjectableClassAsProvider.doSomething();
    }

  /**
   * Even though we have a provider which has a non-injectable class as a property, if you don't use the property
   * the code will compile and run just fine. This is not a good design and can lead to problems during debugging.
   *
   * Other, more strict, frameworks will usually disallow this and throw an error when Service Container is compiled.
   */
  @Get('not-using-object-property')
  noUsingObjectProperty(): string {
      return "This method does not use object's property, which is a non-injectable class, but the provider still has it as a property. And it, surprisingly, works.";
  }
}

import {Controller, Get, Inject} from '@nestjs/common';
import {ProviderWithProviderProperties} from "../provider-with-provider-properties";

@Controller('other-providers-as-properties')
export class OtherProvidersAsPropertiesController {
  constructor(private constructorInjectionPropertyExample: ProviderWithProviderProperties) {}

  @Inject(ProviderWithProviderProperties)
  private propertyInjectionPropertyExample: ProviderWithProviderProperties;

  /**
   * This example uses constructor injection to let the Service Container resolve the dependency;
   */
  @Get('controller-injection')
  constructorInjectionExample(): string {
    return "Injected through a constructor.<br>" + this.constructorInjectionPropertyExample.doSomething();
  }

  /**
   * This example uses property injection to let the Service Container resolve the dependency.
   * The property will not be injected automatically. Instead, you need to manually use the @Inject() decorator right
   * before the property definition.
   *
   * If you don't use the @Inject() decorator, it will throw an error during runtime:
   *    ERROR [ExceptionsHandler] Cannot read properties of undefined (reading 'doSomething')
   */
  @Get('property-injection')
  propertyInjectionExample(): string {
    return "Injected through a property.<br>" + this.propertyInjectionPropertyExample.doSomething();
  }
}

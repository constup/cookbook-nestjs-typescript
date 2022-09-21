import { Controller, Get } from '@nestjs/common';
import { ScalarPropertiesNoDefault } from '../scalar-properties-no-default';

@Controller('scalar-properties-no-default-controller')
export class ScalarPropertiesNoDefaultControllerController {
    constructor(private sampleProvider: ScalarPropertiesNoDefault) {}

  /**
   * This is a default "happy flow". All values are filled before the object is used.
   */
  @Get()
    doSomething(): string {
        this.sampleProvider.numberProperty = 9;
        this.sampleProvider.stringProperty = 'test';
        this.sampleProvider.arrayProperty = [];
        this.sampleProvider.arrayProperty.push(
            'sample1',
            'sample2',
            'sample3',
            this.sampleProvider.stringProperty,
        );

        return JSON.stringify(this.sampleProvider);
    }

  /**
   * If you don't set any values and the provider's properties don't have default values, you will get an empty object.
   * Note that this empty object does not have property values which are undefined - they are simply not there.
   */
  @Get('no-provider-changes')
  doSomethingWithoutTouchingTheProvider(): string {
      return JSON.stringify(this.sampleProvider);
  }

  /**
   * If you set a value to a property of a provider, that property will be included in the object. All properties which
   * don't have their values set will be excluded from the object.
   */
  @Get('one-property-change')
  doSomethingOnePropertyChange(): string {
      this.sampleProvider.numberProperty = 9;

      return JSON.stringify(this.sampleProvider);
  }
}

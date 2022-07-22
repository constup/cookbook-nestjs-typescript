import { Controller, Get } from '@nestjs/common';
import { ScalarPropertiesDefaultValuesProvider } from '../scalar-properties-default-values-provider';

@Controller('scalar-properties-default-values-controller')
export class ScalarPropertiesDefaultValuesControllerController {
  constructor(private sampleProvider: ScalarPropertiesDefaultValuesProvider) {}

  @Get()
  doSomething(): string {
    this.sampleProvider.sampleNumber = 9;
    this.sampleProvider.sampleString = 'test';

    return JSON.stringify(this.sampleProvider);
  }
}

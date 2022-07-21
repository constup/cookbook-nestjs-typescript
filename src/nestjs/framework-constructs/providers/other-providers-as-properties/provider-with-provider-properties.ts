import { Injectable } from '@nestjs/common';
import { ProviderAsProperty } from './provider-as-property';

@Injectable()
export class ProviderWithProviderProperties {
  constructor(private providerAsProperty: ProviderAsProperty) {}

  doSomething(): string {
    return (
      'This provider has another provider as a property.<br>' +
      this.providerAsProperty.stringProperty
    );
  }
}

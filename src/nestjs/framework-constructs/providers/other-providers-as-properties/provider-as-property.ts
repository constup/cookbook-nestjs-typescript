import { Injectable } from '@nestjs/common';

@Injectable()
export class ProviderAsProperty {
  stringProperty: string = 'test';

  doSomething(): string {
    return this.stringProperty;
  }
}

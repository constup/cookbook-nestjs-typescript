import { Injectable } from '@nestjs/common';

@Injectable()
export class ProviderAsProperty {
    stringProperty = 'test';

    doSomething(): string {
        return this.stringProperty;
    }
}

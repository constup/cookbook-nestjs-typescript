import { SampleInterface } from './sample-interface.interface';

export class ConcreteClass02 implements SampleInterface {
    someProperty: string;
    doSomething(): string {
        return 'Concrete Class 02 / ' + this.someProperty;
    }
}

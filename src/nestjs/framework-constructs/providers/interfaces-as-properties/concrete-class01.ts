import { SampleInterface } from './sample-interface.interface';

export class ConcreteClass01 implements SampleInterface {
  someProperty: string;
  doSomething(): string {
    return 'Concrete Class 01 / ' + this.someProperty;
  }
}

import { Injectable } from '@nestjs/common';
import { NonInjectableClass } from './non-injectable-class';

@Injectable()
export class NonInjectableClassAsProvider {
  /**
   * You can't add it as a Constructor property. Nest build tool will throw an error:
   *    ERROR [ExceptionHandler] Nest can't resolve dependencies of the NonInjectableClassAsProvider (?). Please make
   *    sure that the argument NonInjectableClass at index [0] is available in the AppModule context.
   * @param nonInjectableClassInConstructor
   */
  //constructor(private nonInjectableClassInConstructor: NonInjectableClass) {}

  nonInjectableClass: NonInjectableClass;

  doSomething(): string {
    return this.nonInjectableClass.doSomethingElse();
  }
}

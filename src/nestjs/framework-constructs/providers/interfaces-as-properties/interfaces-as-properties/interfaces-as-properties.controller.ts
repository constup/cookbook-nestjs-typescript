import {Controller, Get} from '@nestjs/common';
import {InterfacesAsProperties} from "../interfaces-as-properties";
import {ConcreteClass01} from "../concrete-class01";

@Controller('interfaces-as-properties')
export class InterfacesAsPropertiesController {
  constructor(private interfacesAsProperties: InterfacesAsProperties) {}

  /**
   * Default "happy flow" example. An object is created and assigned to the property before being used.
   */
  @Get()
  doSomething(): string {
    this.interfacesAsProperties.sampleInterface = new ConcreteClass01();
    this.interfacesAsProperties.sampleInterface.someProperty = 'test';

    return this.interfacesAsProperties.sampleInterface.doSomething();
  }

  /**
   * If only one class implements the interface, the code will work. DI will resolve the interface and use the only
   * class available.
   *
   * If two or more classes exist which implement the same interface, an error will be thrown:
   *    ERROR [ExceptionsHandler] Cannot read properties of undefined (reading 'doSomething')
   *
   * In this example, two classes are implementing the SampleInterface: ConcreteClass01 and ConcreteClass02.
   */
  @Get('no-object-creation')
  noObjectCreation(): string {
    return this.interfacesAsProperties.sampleInterface.doSomething();
  }

  /**
   * Even though we have a provider which has an interface as a property and that property value was never initialized,
   * if you don't use the property the code will compile and run just fine. This is not a good design and can lead to
   * problems during debugging.
   *
   * Other, more strict, frameworks will usually disallow this and throw an error when Service Container is compiled.
   * Typically, the framework will try to resolve the interface by finding the class which implements it. If only one
   * class exists, it will be resolved. If two or more classes implement the same interface, the compilation will fail.
   * In NestJS, this is not the case. Service container will compile just fine and the application will run, until the
   * interface is accessed.
   */
  @Get('no-object-creation-no-touch')
  noObjectCreationNoTouch(): string
  {
    return "This controller uses a provider which has an interface as a property. Even though the interface was <br>" +
      "never implemented (a concrete class has never been assigned to the property), as long as the provider isn't <br>" +
      "touched, the code will work (this message will be shown).";
  }
}

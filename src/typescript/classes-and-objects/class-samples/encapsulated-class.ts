// This is the most classic example of an encapsulated OOP class.
export class EncapsulatedClass {
  private _stringProperty: string;

  constructor(stringProperty: string) {
    this._stringProperty = stringProperty;
  }

  get stringProperty(): string {
    return this._stringProperty;
  }

  set stringProperty(stringProperty: string) {
    this._stringProperty = stringProperty;
  }

  doSomething(): string {
    return `Do something in EncapsulatedClass with stringProperty: ${this._stringProperty}`;
  }
}

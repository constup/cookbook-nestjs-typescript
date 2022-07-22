// This is a classic immutable object implemented in a way similar to other OOP languages, like PHP and Java.
export class ClassicImmutableObject {
  private readonly _stringProperty: string;
  private readonly _numberProperty: number;

  constructor(stringProperty: string, numberProperty: number) {
    this._stringProperty = stringProperty;
    this._numberProperty = numberProperty;
  }

  get stringProperty(): string {
    return this._stringProperty;
  }

  get numberProperty(): number {
    return this._numberProperty;
  }

  withStringProperty(stringProperty: string): ClassicImmutableObject {
    return new ClassicImmutableObject(stringProperty, this._numberProperty);
  }

  withNumberProperty(numberProperty: number): ClassicImmutableObject {
    return new ClassicImmutableObject(this._stringProperty, numberProperty);
  }
}

/**
 * This is a sample class which uses a shorthand constructor.
 * A shorthand constructor lets you skip writing class properties both manually (as definitions) and in the constructor.
 * Declaring them in the constructor is enough.
 * Note that there are some limitations when using shorthand constructors:
 *  - Properties must either have a scope (private, protected, public) or be `readonly`.
 */
export class ShorthandConstructor {
  constructor(
    // x - reading outside the class
    // x - changing value outside the class
    // ✓ - reading inside the class
    // x - changing value inside the class
    private readonly privateReadonlyProperty: string,

    // x - reading outside the class
    // x - changing value outside the class
    // ✓ - reading inside the class
    // ✓ - changing value inside the class
    private privateProperty: string,

    // ✓ - reading outside the class
    // x - changing value outside the class
    // ✓ - reading inside the class
    // x - changing value inside the class
    readonly readonlyProperty: string,

    // ✓ - reading outside the class
    // ✓ - changing value outside the class
    // ✓ - reading inside the class
    // ✓ - changing value inside the class
    public publicProperty: string,

    // x - reading outside the class
    // x - changing value outside the class
    // x - reading inside the class
    // x - changing value inside the class
    // Note: don't use this in shorthand constructors, because this value is pretty much useless. You can't read or
    // write to it inside or outside the class, it will not be included in JSON.stringify() when processing this object,
    // but you still need to set it when you want to instantiate an object (in: `new ShorthandConstructor(...)`).
    defaultProperty: string,
  ) {}
}

import { Controller, Get } from '@nestjs/common';
import { ShorthandConstructor } from './shorthand-constructor/shorthand-constructor';

@Controller('class-properties')
export class ClassPropertiesController {
  /**
   * This example covers the shorthand
   */
  @Get('shorthand-constructor')
    shorthandConstructor() {
        const sampleObject = new ShorthandConstructor(
            'private readonly property',
            'just private property',
            'just readonly property',
            'public property',
            'default property',
        );

        let result = '';

        // Trying to set value of a private readonly property. This would throw two errors:
        // TS2341: Property 'privateReadonlyProperty' is private and only accessible within 'class ShorthandProperty'.
        // TS2540: Cannot assign to 'privateReadonlyProperty' because it is a read-only property.
        //sampleObject.privateReadonlyProperty = 'changed property value';

        // Trying to set value of a private property. This would throw an error:
        // TS2341: Property 'privateProperty' is private and only accessible within 'class ShorthandProperty'.
        //sampleObject.privateProperty = 'changed property value';

        // Trying to set value of a readonly property. This would throw an error:
        // TS2540: Cannot assign to 'readonlyProperty' because it is a read-only property.
        //sampleObject.readonlyProperty = 'changed property value';

        // Setting value to a public property.
        sampleObject.publicProperty = 'changed public property value';

        // Trying to set value on a property without explicitly defined scope. This would throw an error:
        // TS2339: Property 'defaultProperty' does not exist on object 'ShorthandConstructor'
        //sampleObject.defaultProperty = 'changed property value';

        // Trying to read value of a private property. This would throw an error:
        // TS2341: Property 'privateProperty' is private and only accessible within 'class ShorthandProperty'.
        //result += `sampleObject.privateProperty: ${sampleObject.privateProperty}\r\n`;

        // Reading readonly property.
        result += `sampleObject.readonlyProperty: ${sampleObject.readonlyProperty}\r\n`;

        // Reading public property.
        result += `sampleObject.publicProperty: ${sampleObject.publicProperty}\r\n`;

        // Trying to read value of a property without explicitly defined scope. This would throw an error:
        // TS2339: Property 'defaultProperty' does not exist on object 'ShorthandConstructor'
        //result += `sampleObject.defaultProperty: ${sampleObject.defaultProperty}\r\n`;

        result += `Sample object: ${JSON.stringify(sampleObject)}\r\n`;

        return result;
    }
}

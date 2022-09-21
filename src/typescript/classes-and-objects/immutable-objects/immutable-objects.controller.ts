import { Controller, Get } from '@nestjs/common';
import { ClassicImmutableObject } from '../class-samples/classic-immutable-object';

@Controller('immutable-objects')
export class ImmutableObjectsController {
  @Get('classic-immutable-object')
    immutableObject(): string {
        const immutableObject: ClassicImmutableObject = new ClassicImmutableObject(
            'test string',
            123,
        );
        // this is not allowed: (TS2540 Can not assign to read-only property)
        //immutableObject.stringProperty = 'modified';

        let result = `Original classic immutable object: ${JSON.stringify(immutableObject)} \r\n`;
        result += 'This demonstrates how to use getters:\r\n';
        result += `stringProperty value: ${immutableObject.stringProperty}\r\n`;
        result += `numberProperty value: ${immutableObject.numberProperty}\r\n\r\n`;

        const modifiedImmutableObject: ClassicImmutableObject =
      immutableObject.withStringProperty('modified test string');

        result += `Modified classic immutable object with only stringProperty changed: ${JSON.stringify(modifiedImmutableObject)}\r\n`;
        result += `Original immutable object is still available and unchanged: ${JSON.stringify(immutableObject)}`;

        return result;
    }
}

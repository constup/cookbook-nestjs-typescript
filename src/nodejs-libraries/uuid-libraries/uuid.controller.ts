import { Controller, Get } from '@nestjs/common';
import { v4 } from 'uuid';

@Controller('uuid')
export class UuidController {
  @Get('npm-uuid')
    generateV4(): string {
        return `To generate a new UUID:
    \t- npm i uuid
    \t- import { v4 } from 'uuid';
    \t- const uuidString = v4();
    For more information, visit: https://www.npmjs.com/package/uuid
    
    Sample generated UUID: ${v4()}
    `;
    }
}

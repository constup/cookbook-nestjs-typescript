import { Injectable } from '@nestjs/common';

@Injectable()
export class ScalarPropertiesNoDefault {
    stringProperty: string;
    arrayProperty: string[];
    numberProperty: number;
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ScalarPropertiesDefaultValuesProvider {
    sampleArray: string[] = [];
    sampleString = '';
    sampleNumber = 0;
}

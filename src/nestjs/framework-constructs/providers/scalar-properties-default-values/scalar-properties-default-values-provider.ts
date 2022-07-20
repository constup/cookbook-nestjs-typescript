import { Injectable } from '@nestjs/common';

@Injectable()
export class ScalarPropertiesDefaultValuesProvider {
  sampleArray: string[] = [];
  sampleString: string = '';
  sampleNumber: number = 0;
}

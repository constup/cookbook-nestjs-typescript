import { Injectable } from '@nestjs/common';
import {SampleInterface} from "./sample-interface.interface";

@Injectable()
export class InterfacesAsProperties{
  sampleInterface: SampleInterface;
}

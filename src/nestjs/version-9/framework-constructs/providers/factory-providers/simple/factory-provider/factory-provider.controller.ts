import {Controller, Get, Inject} from '@nestjs/common';
import {ServiceInterface} from "../service.interface";

@Controller('factory-provider')
export class FactoryProviderController {
    constructor(
        @Inject("SERVICE_1_FROM_FACTORY") private readonly service1: ServiceInterface,
        @Inject("SERVICE_2_FROM_FACTORY") private readonly service2: ServiceInterface
    ) {}

    @Get()
    doSomething() {
        let result = '';
        result += this.service1.doSomething('sample123') + "\r\n";
        result += this.service2.doSomething('test456');

        return result;
    }
}

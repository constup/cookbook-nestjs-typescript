import {Controller, Get, Inject} from '@nestjs/common';
import {Service} from "../service";

@Controller('factory-provider')
export class FactoryProviderController {
    constructor(@Inject("SAMPLE_FACTORY_PROVIDER") private readonly service: Service) {
    }

    @Get()
    doSomething() {
        return this.service.doSomething('sample123');
    }
}

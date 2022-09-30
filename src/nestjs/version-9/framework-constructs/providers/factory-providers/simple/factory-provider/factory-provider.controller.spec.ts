import { Test, TestingModule } from '@nestjs/testing';
import { FactoryProviderController } from './factory-provider.controller';

describe('FactoryProviderController', () => {
    let controller: FactoryProviderController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FactoryProviderController],
        }).compile();

        controller = module.get<FactoryProviderController>(FactoryProviderController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

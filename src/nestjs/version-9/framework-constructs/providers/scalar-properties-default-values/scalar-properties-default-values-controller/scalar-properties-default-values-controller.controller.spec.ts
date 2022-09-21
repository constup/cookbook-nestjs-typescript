import { Test, TestingModule } from '@nestjs/testing';
import { ScalarPropertiesDefaultValuesControllerController } from './scalar-properties-default-values-controller.controller';

describe('ScalarPropertiesDefaultValuesControllerController', () => {
    let controller: ScalarPropertiesDefaultValuesControllerController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ScalarPropertiesDefaultValuesControllerController],
        }).compile();

        controller = module.get<ScalarPropertiesDefaultValuesControllerController>(
            ScalarPropertiesDefaultValuesControllerController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

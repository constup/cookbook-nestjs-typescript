import { Test, TestingModule } from '@nestjs/testing';
import { ScalarPropertiesNoDefaultControllerController } from './scalar-properties-no-default-controller.controller';

describe('ScalarPropertiesNoDefaultControllerController', () => {
    let controller: ScalarPropertiesNoDefaultControllerController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ScalarPropertiesNoDefaultControllerController],
        }).compile();

        controller = module.get<ScalarPropertiesNoDefaultControllerController>(
            ScalarPropertiesNoDefaultControllerController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

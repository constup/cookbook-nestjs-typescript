import { Test, TestingModule } from '@nestjs/testing';
import { UrlParametersController } from './url-parameters.controller';

describe('UrlParametersController', () => {
    let controller: UrlParametersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UrlParametersController],
        }).compile();

        controller = module.get<UrlParametersController>(UrlParametersController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

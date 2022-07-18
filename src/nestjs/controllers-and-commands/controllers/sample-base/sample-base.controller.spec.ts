import { Test, TestingModule } from '@nestjs/testing';
import { SampleBaseController } from './sample-base.controller';

describe('SampleBaseController', () => {
    let controller: SampleBaseController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SampleBaseController],
        }).compile();

        controller = module.get<SampleBaseController>(SampleBaseController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

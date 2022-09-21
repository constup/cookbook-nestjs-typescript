import { Test, TestingModule } from '@nestjs/testing';
import { SimpleUseOfThenController } from './simple-use-of-then.controller';

describe('ThenCatchFinallyController', () => {
    let controller: SimpleUseOfThenController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SimpleUseOfThenController],
        }).compile();

        controller = module.get<SimpleUseOfThenController>(SimpleUseOfThenController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

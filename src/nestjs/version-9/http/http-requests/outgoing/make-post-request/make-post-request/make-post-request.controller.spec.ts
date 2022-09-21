import { Test, TestingModule } from '@nestjs/testing';
import { MakePostRequestController } from './make-post-request.controller';

describe('MakePostRequestController', () => {
    let controller: MakePostRequestController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MakePostRequestController],
        }).compile();

        controller = module.get<MakePostRequestController>(
            MakePostRequestController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

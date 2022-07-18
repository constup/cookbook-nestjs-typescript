import { Test, TestingModule } from '@nestjs/testing';
import { PostPayloadController } from './post-payload.controller';

describe('PostPayloadController', () => {
    let controller: PostPayloadController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PostPayloadController],
        }).compile();

        controller = module.get<PostPayloadController>(PostPayloadController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

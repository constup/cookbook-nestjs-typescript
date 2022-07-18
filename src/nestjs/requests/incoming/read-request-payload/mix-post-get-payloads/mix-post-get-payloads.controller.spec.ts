import { Test, TestingModule } from '@nestjs/testing';
import { MixPostGetPayloadsController } from './mix-post-get-payloads.controller';

describe('MixPostGetPayloadsController', () => {
    let controller: MixPostGetPayloadsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MixPostGetPayloadsController],
        }).compile();

        controller = module.get<MixPostGetPayloadsController>(
            MixPostGetPayloadsController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

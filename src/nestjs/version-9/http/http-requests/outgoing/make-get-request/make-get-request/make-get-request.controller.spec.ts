import { Test, TestingModule } from '@nestjs/testing';
import { MakeGetRequestController } from './make-get-request.controller';

describe('MakeGetRequestController', () => {
    let controller: MakeGetRequestController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MakeGetRequestController],
        }).compile();

        controller = module.get<MakeGetRequestController>(MakeGetRequestController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

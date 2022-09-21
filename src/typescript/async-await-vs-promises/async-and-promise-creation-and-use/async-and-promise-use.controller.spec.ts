import { Test, TestingModule } from '@nestjs/testing';
import { AsyncAndPromiseUseController } from './async-and-promise-use.controller';

describe('AsyncAndPromiseUseController', () => {
    let controller: AsyncAndPromiseUseController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AsyncAndPromiseUseController],
        }).compile();

        controller = module.get<AsyncAndPromiseUseController>(AsyncAndPromiseUseController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

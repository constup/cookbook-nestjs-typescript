import { Test, TestingModule } from '@nestjs/testing';
import { PromiseReturningDifferentTypesController } from './promise-returning-different-types.controller';

describe('PromiseReturningDifferentTypesController', () => {
    let controller: PromiseReturningDifferentTypesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PromiseReturningDifferentTypesController],
        }).compile();

        controller = module.get<PromiseReturningDifferentTypesController>(PromiseReturningDifferentTypesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

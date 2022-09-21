import { Test, TestingModule } from '@nestjs/testing';
import { PromiseReturningFunctionController } from './promise-returning-function.controller';

describe('PromiseReturningFunctionController', () => {
    let controller: PromiseReturningFunctionController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PromiseReturningFunctionController],
        }).compile();

        controller = module.get<PromiseReturningFunctionController>(PromiseReturningFunctionController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

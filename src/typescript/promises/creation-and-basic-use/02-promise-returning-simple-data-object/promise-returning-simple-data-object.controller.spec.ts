import { Test, TestingModule } from '@nestjs/testing';
import { PromiseReturningSimpleDataObjectController } from './promise-returning-simple-data-object.controller';

describe('PromiseReturningObjectController', () => {
    let controller: PromiseReturningSimpleDataObjectController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PromiseReturningSimpleDataObjectController],
        }).compile();

        controller = module.get<PromiseReturningSimpleDataObjectController>(PromiseReturningSimpleDataObjectController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

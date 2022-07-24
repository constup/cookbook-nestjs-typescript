import { Test, TestingModule } from '@nestjs/testing';
import { PromiseReturningObjectController } from './promise-returning-object.controller';

describe('PromiseReturningObjectController', () => {
  let controller: PromiseReturningObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromiseReturningObjectController],
    }).compile();

    controller = module.get<PromiseReturningObjectController>(PromiseReturningObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

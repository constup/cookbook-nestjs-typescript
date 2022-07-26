import { Test, TestingModule } from '@nestjs/testing';
import { PromiseReturningOtherPromiseController } from './promise-returning-other-promise.controller';

describe('PromiseReturningOtherPromiseController', () => {
  let controller: PromiseReturningOtherPromiseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromiseReturningOtherPromiseController],
    }).compile();

    controller = module.get<PromiseReturningOtherPromiseController>(PromiseReturningOtherPromiseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SimplePromiseReturningStringController } from './simple-promise-returning-string.controller';

describe('SimplePromiseController', () => {
  let controller: SimplePromiseReturningStringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimplePromiseReturningStringController],
    }).compile();

    controller = module.get<SimplePromiseReturningStringController>(SimplePromiseReturningStringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

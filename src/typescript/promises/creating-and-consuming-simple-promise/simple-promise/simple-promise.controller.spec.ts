import { Test, TestingModule } from '@nestjs/testing';
import { SimplePromiseController } from './simple-promise.controller';

describe('SimplePromiseController', () => {
  let controller: SimplePromiseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimplePromiseController],
    }).compile();

    controller = module.get<SimplePromiseController>(SimplePromiseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

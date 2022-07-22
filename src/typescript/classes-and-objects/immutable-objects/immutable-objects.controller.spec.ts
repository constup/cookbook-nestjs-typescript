import { Test, TestingModule } from '@nestjs/testing';
import { ImmutableObjectsController } from './immutable-objects.controller';

describe('ImmutableObjectsController', () => {
  let controller: ImmutableObjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImmutableObjectsController],
    }).compile();

    controller = module.get<ImmutableObjectsController>(ImmutableObjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

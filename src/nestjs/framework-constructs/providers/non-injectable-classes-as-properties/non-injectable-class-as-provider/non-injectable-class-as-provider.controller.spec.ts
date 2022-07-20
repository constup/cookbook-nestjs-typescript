import { Test, TestingModule } from '@nestjs/testing';
import { NonInjectableClassAsProviderController } from './non-injectable-class-as-provider.controller';

describe('NonInjectableClassAsProviderController', () => {
  let controller: NonInjectableClassAsProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NonInjectableClassAsProviderController],
    }).compile();

    controller = module.get<NonInjectableClassAsProviderController>(NonInjectableClassAsProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

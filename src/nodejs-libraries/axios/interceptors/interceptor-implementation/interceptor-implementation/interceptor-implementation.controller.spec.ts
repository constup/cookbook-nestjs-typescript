import { Test, TestingModule } from '@nestjs/testing';
import { InterceptorImplementationController } from './interceptor-implementation.controller';

describe('InterceptorImplementationController', () => {
  let controller: InterceptorImplementationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterceptorImplementationController],
    }).compile();

    controller = module.get<InterceptorImplementationController>(InterceptorImplementationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

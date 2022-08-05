import { Test, TestingModule } from '@nestjs/testing';
import { ClassicOopImplementationController } from './classic-oop-implementation.controller';

describe('ClassicOopImplementationController', () => {
  let controller: ClassicOopImplementationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassicOopImplementationController],
    }).compile();

    controller = module.get<ClassicOopImplementationController>(
      ClassicOopImplementationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

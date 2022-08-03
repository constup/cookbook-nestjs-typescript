import { Test, TestingModule } from '@nestjs/testing';
import { ClassPropertiesController } from './class-properties.controller';

describe('ClassPropertiesController', () => {
  let controller: ClassPropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassPropertiesController],
    }).compile();

    controller = module.get<ClassPropertiesController>(ClassPropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

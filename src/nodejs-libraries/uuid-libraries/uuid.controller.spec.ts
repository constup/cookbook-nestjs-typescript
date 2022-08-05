import { Test, TestingModule } from '@nestjs/testing';
import { UuidController } from './uuid.controller';

describe('UuidController', () => {
  let controller: UuidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UuidController],
    }).compile();

    controller = module.get<UuidController>(UuidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

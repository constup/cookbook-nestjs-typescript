import { Test, TestingModule } from '@nestjs/testing';
import { ReturnJsonPayloadController } from './return-json-payload.controller';

describe('ReturnJsonPayloadController', () => {
  let controller: ReturnJsonPayloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnJsonPayloadController],
    }).compile();

    controller = module.get<ReturnJsonPayloadController>(ReturnJsonPayloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

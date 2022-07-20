import { Test, TestingModule } from '@nestjs/testing';
import { OtherProvidersAsPropertiesController } from './other-providers-as-properties.controller';

describe('OtherProvidersAsPropertiesController', () => {
  let controller: OtherProvidersAsPropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtherProvidersAsPropertiesController],
    }).compile();

    controller = module.get<OtherProvidersAsPropertiesController>(OtherProvidersAsPropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

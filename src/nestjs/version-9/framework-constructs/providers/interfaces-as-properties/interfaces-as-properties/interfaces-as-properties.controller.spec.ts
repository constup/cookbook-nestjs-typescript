import { Test, TestingModule } from '@nestjs/testing';
import { InterfacesAsPropertiesController } from './interfaces-as-properties.controller';

describe('InterfacesAsPropertiesController', () => {
  let controller: InterfacesAsPropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterfacesAsPropertiesController],
    }).compile();

    controller = module.get<InterfacesAsPropertiesController>(
      InterfacesAsPropertiesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

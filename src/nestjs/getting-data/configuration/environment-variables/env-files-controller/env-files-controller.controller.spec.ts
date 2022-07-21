import { Test, TestingModule } from '@nestjs/testing';
import { EnvFilesControllerController } from './env-files-controller.controller';

describe('EnvFilesControllerController', () => {
  let controller: EnvFilesControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvFilesControllerController],
    }).compile();

    controller = module.get<EnvFilesControllerController>(
      EnvFilesControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

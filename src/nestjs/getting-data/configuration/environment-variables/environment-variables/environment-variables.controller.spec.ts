import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentVariablesController } from './environment-variables.controller';

describe('EnvironmentVariablesController', () => {
    let controller: EnvironmentVariablesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EnvironmentVariablesController],
        }).compile();

        controller = module.get<EnvironmentVariablesController>(
            EnvironmentVariablesController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

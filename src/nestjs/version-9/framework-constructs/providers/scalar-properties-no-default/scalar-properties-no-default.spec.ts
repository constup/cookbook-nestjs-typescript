import { Test, TestingModule } from '@nestjs/testing';
import { ScalarPropertiesNoDefault } from './scalar-properties-no-default';

describe('ScalarPropertiesNoDefault', () => {
    let provider: ScalarPropertiesNoDefault;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ScalarPropertiesNoDefault],
        }).compile();

        provider = module.get<ScalarPropertiesNoDefault>(ScalarPropertiesNoDefault);
    });

    it('should be defined', () => {
        expect(provider).toBeDefined();
    });
});

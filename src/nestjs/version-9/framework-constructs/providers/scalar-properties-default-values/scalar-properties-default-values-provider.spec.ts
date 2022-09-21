import { Test, TestingModule } from '@nestjs/testing';
import { ScalarPropertiesDefaultValuesProvider } from './scalar-properties-default-values-provider';

describe('ScalarPropertiesDefaultValuesProvider', () => {
    let provider: ScalarPropertiesDefaultValuesProvider;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ScalarPropertiesDefaultValuesProvider],
        }).compile();

        provider = module.get<ScalarPropertiesDefaultValuesProvider>(
            ScalarPropertiesDefaultValuesProvider,
        );
    });

    it('should be defined', () => {
        expect(provider).toBeDefined();
    });
});

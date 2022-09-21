import { Test, TestingModule } from '@nestjs/testing';
import { ProviderWithProviderProperties } from './provider-with-provider-properties';

describe('ProviderWithProviderProperties', () => {
    let provider: ProviderWithProviderProperties;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProviderWithProviderProperties],
        }).compile();

        provider = module.get<ProviderWithProviderProperties>(
            ProviderWithProviderProperties,
        );
    });

    it('should be defined', () => {
        expect(provider).toBeDefined();
    });
});

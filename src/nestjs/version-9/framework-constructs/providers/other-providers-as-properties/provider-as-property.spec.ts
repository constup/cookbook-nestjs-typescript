import { Test, TestingModule } from '@nestjs/testing';
import { ProviderAsProperty } from './provider-as-property';

describe('ProviderAsProperty', () => {
    let provider: ProviderAsProperty;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProviderAsProperty],
        }).compile();

        provider = module.get<ProviderAsProperty>(ProviderAsProperty);
    });

    it('should be defined', () => {
        expect(provider).toBeDefined();
    });
});

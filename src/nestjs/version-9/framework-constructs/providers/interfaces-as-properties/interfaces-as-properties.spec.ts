import { Test, TestingModule } from '@nestjs/testing';
import { InterfacesAsProperties } from './interfaces-as-properties';

describe('InterfacesAsProperties', () => {
    let provider: InterfacesAsProperties;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [InterfacesAsProperties],
        }).compile();

        provider = module.get<InterfacesAsProperties>(InterfacesAsProperties);
    });

    it('should be defined', () => {
        expect(provider).toBeDefined();
    });
});

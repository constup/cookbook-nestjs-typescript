import { Test, TestingModule } from '@nestjs/testing';
import { SampleThirdPartyServerController } from './sample-third-party-server.controller';

describe('SampleThirdPartyServerController', () => {
    let controller: SampleThirdPartyServerController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SampleThirdPartyServerController],
        }).compile();

        controller = module.get<SampleThirdPartyServerController>(SampleThirdPartyServerController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

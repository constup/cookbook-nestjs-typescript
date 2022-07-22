import { Test, TestingModule } from '@nestjs/testing';
import { FetchRequestHeadersController } from './fetch-request-headers.controller';

describe('FetchRequestHeadersController', () => {
  let controller: FetchRequestHeadersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FetchRequestHeadersController],
    }).compile();

    controller = module.get<FetchRequestHeadersController>(
      FetchRequestHeadersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

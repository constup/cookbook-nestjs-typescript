import { Test, TestingModule } from '@nestjs/testing';
import { NonInjectableClassAsProvider } from './non-injectable-class-as-provider';

describe('NonInjectableClassAsProvider', () => {
  let provider: NonInjectableClassAsProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NonInjectableClassAsProvider],
    }).compile();

    provider = module.get<NonInjectableClassAsProvider>(NonInjectableClassAsProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

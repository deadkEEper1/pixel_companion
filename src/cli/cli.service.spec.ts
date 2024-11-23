import { Test, TestingModule } from '@nestjs/testing';
import { CliService } from './cli.service';

describe('CliService', () => {
  let service: CliService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliService],
    }).compile();

    // TODO: ADD first test
    // service = module.get<CliService>(CliService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

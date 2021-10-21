import { Test, TestingModule } from '@nestjs/testing';
import { ApicallService } from './apicall.service';

describe('ApicallService', () => {
  let service: ApicallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApicallService],
    }).compile();

    service = module.get<ApicallService>(ApicallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SmsVonageService } from './sms-vonage.service';

describe('SmsVonageService', () => {
  let service: SmsVonageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsVonageService],
    }).compile();

    service = module.get<SmsVonageService>(SmsVonageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

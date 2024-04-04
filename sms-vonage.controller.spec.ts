import { Test, TestingModule } from '@nestjs/testing';
import { SmsVonageController } from './sms-vonage.controller';

describe('SmsVonageController', () => {
  let controller: SmsVonageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmsVonageController],
    }).compile();

    controller = module.get<SmsVonageController>(SmsVonageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

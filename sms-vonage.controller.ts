import { Controller, Post } from '@nestjs/common';
import { SmsVonageService } from './sms-vonage.service';

@Controller('sms-vonage')
export class SmsVonageController {
  constructor(private readonly smsVornageService: SmsVonageService) {}

  @Post()
  async sendSms() {
    return await this.smsVornageService.sendSMS();
  }
}

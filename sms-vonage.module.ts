import { Module } from '@nestjs/common';
import { SmsVonageService } from './sms-vonage.service';
import { SmsVonageController } from './sms-vonage.controller';

@Module({
  providers: [SmsVonageService],
  controllers: [SmsVonageController]
})
export class SmsVonageModule {}

import { Injectable } from '@nestjs/common';
const { Vonage } = require('@vonage/server-sdk');

@Injectable()
export class SmsVonageService {
  async sendSMS() {
    const vonage = new Vonage({
      apiKey: '790addd8',
      apiSecret: '7oRBtjFBanPFDbdA',
    });

    const from = 'Vonage APIs';
    const to = '94755646498';
    const text = 'OTP : 1524';

    await vonage.sms
      .send({ to, from, text })
      .then((resp) => {
        console.log('Message sent successfully');
        console.log(resp);
      })
      .catch((err) => {
        console.log('There was an error sending the messages.');
        console.error(err);
      });
  }
}

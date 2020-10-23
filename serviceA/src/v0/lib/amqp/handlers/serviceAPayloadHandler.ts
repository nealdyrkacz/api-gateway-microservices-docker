import { Handler } from './handler';
import { Message } from 'amqplib/callback_api';

export class ServiceAPayloadHandler implements Handler {
  handle(message: Message) {
    const payload = JSON.parse(message.content.toString());
    console.log('I just got a Payload!');
    console.log('>>>>>>> sender:' + payload.sender);
    console.log('>>>>>>> message:' + payload.message);
  }
}

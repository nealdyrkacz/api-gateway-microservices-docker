import { Message } from 'amqplib/callback_api';
import { Handler } from './handler';
export class ServiceBMessageHandler implements Handler {
  handle(message: Message) {
    console.log('I just got a message!');
    console.log('>>>>>>> ' + message.content.toString());
  }
}

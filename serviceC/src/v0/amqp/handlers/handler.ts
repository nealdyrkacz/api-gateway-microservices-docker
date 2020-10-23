import { Message } from 'amqplib/callback_api';

export interface Handler {
  handle(message: Message): void;
}

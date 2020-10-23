import { connect, Connection, Message, Options } from 'amqplib/callback_api';
import { ServiceAMessageHandler } from './handlers/serviceAMessageHandler';
import { ServiceAPayloadHandler } from './handlers/serviceAPayloadHandler';
import { Handler } from './handlers/handler';

export class ServiceAAMQPConsumer {
  connect() {
    this.connectQueue('service_a', new ServiceAMessageHandler());
    this.connectQueue('service_a_data', new ServiceAPayloadHandler());
  }

  private connectQueue(queue: string, handler: Handler): void {
    try {
      const connectionOptions: Options.Connect = {
        protocol: 'amqp',
        hostname: 'localhost',
        username: 'guest',
        password: 'guest',
        port: 5672,
        heartbeat: 60,
      };

      connect(connectionOptions, (e: any, connection: Connection) => {
        connection.createChannel((e, channel) => {
          const assertQueueOptions: Options.AssertQueue = {
            durable: false,
          };

          channel.assertQueue(queue, assertQueueOptions);

          console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);

          channel.consume(queue, (message: Message) => handler.handle(message), {
            noAck: true,
          });
        });
      });
    } catch (e) {
      console.error(e);
    }
  }
}

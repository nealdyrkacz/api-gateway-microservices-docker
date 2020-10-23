import { connect, Connection, Message, Options } from 'amqplib/callback_api';
import { ServiceCMessageHandler } from './handlers/serviceCMessageHandler';
import { ServiceCPayloadHandler } from './handlers/serviceCPayloadHandler';
import { Handler } from './handlers/handler';

export class ServiceCAMQPConsumer {
  connect() {
    this.connectQueue('service_c', new ServiceCMessageHandler());
    this.connectQueue('service_c_data', new ServiceCPayloadHandler());
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

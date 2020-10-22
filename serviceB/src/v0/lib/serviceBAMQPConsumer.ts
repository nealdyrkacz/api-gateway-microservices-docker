import { connect, Connection, Options } from 'amqplib/callback_api';
import { ServiceBMessageHandler } from './serviceBMessageHandler';

export class ServiceBAMQPConsumer {
  static connect() {
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
          const queue = 'service_b';

          const assertQueueOptions: Options.AssertQueue = {
            durable: false,
          };

          channel.assertQueue(queue, assertQueueOptions);

          console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);

          channel.consume(queue, (msg: any) => ServiceBMessageHandler.handleMessage(msg.content.toString()), {
            noAck: true,
          });
        });
      });
    } catch (e) {
      console.error(e);
    }
  }
}

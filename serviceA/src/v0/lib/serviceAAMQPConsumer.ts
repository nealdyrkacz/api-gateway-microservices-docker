import { connect, Channel, Connection, Options } from 'amqplib/callback_api';
import { ServiceAMessageHandler } from './serviceAMessageHandler';

export class ServiceAAMQPConsumer {
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
          const queue = 'service_a';

          const assertQueueOptions: Options.AssertQueue = {
            durable: false,
          };

          channel.assertQueue(queue, assertQueueOptions);

          console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);

          channel.consume(queue, (msg: any) => ServiceAMessageHandler.handleMessage(msg.content.toString()), {
            noAck: true,
          });
        });
      });
    } catch (e) {
      console.error(e);
    }
  }
}

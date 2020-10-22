import { connect, Options, Connection } from 'amqplib/callback_api';

export class GatewayAMQPProducer {
  static connect(queue: string, message: string): void {
    const connectionOptions: Options.Connect = {
      protocol: 'amqp',
      hostname: 'localhost',
      username: 'guest',
      password: 'guest',
      port: 5672,
      heartbeat: 60,
    };

    connect(connectionOptions, (e: any, connection: Connection) => {
      const channel = connection.createChannel((e, channel) => {
        const assertQueueOptions: Options.AssertQueue = {
          durable: false,
        };

        channel.assertQueue(queue, assertQueueOptions);

        channel.sendToQueue(queue, Buffer.from(message));

        setTimeout(() => {
          connection.close();
          process.exit(0);
        }, 500);
      });
    });
  }
}

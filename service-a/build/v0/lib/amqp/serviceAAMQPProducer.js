"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAAMQPProducer = void 0;
const callback_api_1 = require("amqplib/callback_api");
class ServiceAAMQPProducer {
    static connect(queue, message) {
        const connectionOptions = {
            protocol: 'amqp',
            hostname: 'localhost',
            username: 'guest',
            password: 'guest',
            port: 5672,
            heartbeat: 60,
        };
        callback_api_1.connect(connectionOptions, (e, connection) => {
            connection.createChannel((e, channel) => {
                const assertQueueOptions = {
                    durable: false,
                };
                channel.assertQueue(queue, assertQueueOptions);
                channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
                setTimeout(() => {
                    connection.close();
                    process.exit(0);
                }, 500);
            });
        });
    }
}
exports.ServiceAAMQPProducer = ServiceAAMQPProducer;
//# sourceMappingURL=serviceAAMQPProducer.js.map
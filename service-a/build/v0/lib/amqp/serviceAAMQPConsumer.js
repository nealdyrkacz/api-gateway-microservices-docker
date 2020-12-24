"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAAMQPConsumer = void 0;
const callback_api_1 = require("amqplib/callback_api");
const serviceAMessageHandler_1 = require("./handlers/serviceAMessageHandler");
const serviceAPayloadHandler_1 = require("./handlers/serviceAPayloadHandler");
class ServiceAAMQPConsumer {
    connect() {
        this.connectQueue('service_a', new serviceAMessageHandler_1.ServiceAMessageHandler());
        this.connectQueue('service_a_data', new serviceAPayloadHandler_1.ServiceAPayloadHandler());
    }
    connectQueue(queue, handler) {
        try {
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
                    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);
                    channel.consume(queue, (message) => handler.handle(message), {
                        noAck: true,
                    });
                });
            });
        }
        catch (e) {
            console.error(e);
        }
    }
}
exports.ServiceAAMQPConsumer = ServiceAAMQPConsumer;
//# sourceMappingURL=serviceAAMQPConsumer.js.map
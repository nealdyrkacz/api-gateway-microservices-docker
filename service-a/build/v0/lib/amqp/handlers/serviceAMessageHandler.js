"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAMessageHandler = void 0;
class ServiceAMessageHandler {
    handle(message) {
        console.log('I just got a message!');
        console.log('>>>>>>> ' + message.content.toString());
    }
}
exports.ServiceAMessageHandler = ServiceAMessageHandler;
//# sourceMappingURL=serviceAMessageHandler.js.map
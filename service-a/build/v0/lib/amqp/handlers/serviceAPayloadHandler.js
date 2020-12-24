"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAPayloadHandler = void 0;
class ServiceAPayloadHandler {
    handle(message) {
        const payload = JSON.parse(message.content.toString());
        console.log('I just got a Payload!');
        console.log('>>>>>>> sender:' + payload.sender);
        console.log('>>>>>>> message:' + payload.message);
    }
}
exports.ServiceAPayloadHandler = ServiceAPayloadHandler;
//# sourceMappingURL=serviceAPayloadHandler.js.map
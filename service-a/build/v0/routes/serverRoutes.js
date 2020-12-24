"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerRoutes = void 0;
const serverController_1 = require("../controllers/serverController");
class ServerRoutes {
    constructor() {
        this.serverController = new serverController_1.ServerController();
    }
    routes(app) {
        app.route('/v0/status').get([], this.serverController.getStatus);
        app.route('/v0/sendServiceBPayloadMessage').post([], this.serverController.sendServiceBPayloadMessage);
        app.route('/v0/sendServiceCPayloadMessage').post([], this.serverController.sendServiceCPayloadMessage);
    }
}
exports.ServerRoutes = ServerRoutes;
//# sourceMappingURL=serverRoutes.js.map
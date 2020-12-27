"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerRoutes = void 0;
const serverController_1 = require("../controllers/serverController");
class ServerRoutes {
    constructor() {
        this.serverController = new serverController_1.ServerController();
    }
    routes(app) {
        app.route('/v1/status').get([], this.serverController.getStatus);
    }
}
exports.ServerRoutes = ServerRoutes;
//# sourceMappingURL=serverRoutes.js.map
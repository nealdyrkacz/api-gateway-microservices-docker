"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureRoutes = void 0;
const serverRoutes_1 = require("./serverRoutes");
function configureRoutes(app) {
    const routes = [];
    routes.push(new serverRoutes_1.ServerRoutes());
    routes.forEach(route => route.routes(app));
    return routes;
}
exports.configureRoutes = configureRoutes;
//# sourceMappingURL=index.js.map
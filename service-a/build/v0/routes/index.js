"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureRoutesV0 = void 0;
const serverRoutes_1 = require("./serverRoutes");
function configureRoutesV0(app) {
    const routes = [];
    routes.push(new serverRoutes_1.ServerRoutes());
    routes.forEach(route => route.routes(app));
    return routes;
}
exports.configureRoutesV0 = configureRoutesV0;
//# sourceMappingURL=index.js.map
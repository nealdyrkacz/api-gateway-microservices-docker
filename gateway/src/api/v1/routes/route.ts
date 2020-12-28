import { ServerRoutes } from './server.routes';
import { GatewayServiceARoutes } from './service-a.routes';

//export interface Route {
//  route: ServerRoutes | IdentityRoutes | GatewayServiceARoutes;
//}

export type GatewayRoute = ServerRoutes;
export type GatewayServiceRoute = GatewayServiceARoutes;
export type Route = GatewayRoute | GatewayServiceRoute;

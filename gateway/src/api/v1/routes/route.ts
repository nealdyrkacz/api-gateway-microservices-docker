import { ServerRoutes } from './serverRoutes';
import { GatewayServiceARoutes } from './gatewayServiceARoutes';

//export interface Route {
//  route: ServerRoutes | IdentityRoutes | GatewayServiceARoutes;
//}

export type GatewayRoute = ServerRoutes;
export type GatewayServiceRoute = GatewayServiceARoutes;
export type Route = GatewayRoute | GatewayServiceRoute;

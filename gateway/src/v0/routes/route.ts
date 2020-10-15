import { ServerRoutes } from './serverRoutes';
import { GatewayServiceARoutes } from './gatewayServiceARoutes';
import { GatewayServiceBRoutes } from './gatewayServiceBRoutes';
import { GatewayServiceCRoutes } from './gatewayServiceCRoutes';
//export interface Route {
//  route: ServerRoutes | IdentityRoutes | GatewayServiceARoutes;
//}

export type GatewayRoute = ServerRoutes 
export type GatewayServiceRoute =  GatewayServiceARoutes | GatewayServiceBRoutes | GatewayServiceCRoutes;
export type Route = GatewayRoute | GatewayServiceRoute

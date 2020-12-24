"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const serviceAAMQPConsumer_1 = require("./v0/lib/amqp/serviceAAMQPConsumer");
//import { db } from './database/models/index';
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        // initialize configuration
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        //require('./database/models/index');
        dotenv_1.default.config();
        const serviceAConsumer = new serviceAAMQPConsumer_1.ServiceAAMQPConsumer();
        serviceAConsumer.connect();
        const app = new app_1.default();
        app.start();
    });
}
start();
//# sourceMappingURL=server.js.map
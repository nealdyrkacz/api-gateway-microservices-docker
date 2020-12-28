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
const nodeENVError_1 = __importDefault(require("./errors/nodeENVError"));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        /************************************************/
        /************************************************/
        //    check for valid NODE_ENV                  //
        //    initialize configuration                  //
        //    start redis client                        //
        //    initialize db connection & init ORM models//
        //    start App object / Express server         //
        /************************************************/
        /************************************************/
        //make sure we are setting a NODE_ENV
        try {
            if (process.env.NODE_ENV != 'development' &&
                process.env.NODE_ENV != 'test' &&
                process.env.NODE_ENV != 'production') {
                throw new nodeENVError_1.default('An incorrect Node ENV has been set, only `development`, `test`, and `production` are allowed.');
            }
            else {
                //config
                if (process.env.NODE_ENV == 'development') {
                    dotenv_1.default.config();
                }
                // initialize Redis Client
                //require('./redisClient');
                //initialize Sequelize ORM
                //require('./database/models/index');
                const app = new app_1.default();
                app.start();
            }
        }
        catch (e) {
            console.error(e);
        }
    });
}
start();
//# sourceMappingURL=server.js.map
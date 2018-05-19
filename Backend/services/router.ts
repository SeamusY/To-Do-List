import * as express from 'express';
import GoogleServices from './googleService'
const app = express();
export class Router{
    getrouter(){
        const router = express.Router();
        router.use("/google", GoogleServices);
    }
}
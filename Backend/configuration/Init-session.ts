import * as  expressSession from 'express-session';
import * as connectRedis from 'connect-redis';
import { RedisClient } from 'redis';
import * as express from 'express';

export default (app:express.Express, redisClient:RedisClient) => {
    const redisStore = connectRedis(expressSession);
    const sessionStore = new redisStore({
        client: redisClient
    });
    const settings = {
        store: sessionStore,
        secret:"SecretInformation",
        cookie: { "path": '/', "httpOnly": true, "secure": false,  "maxAge": null },
        unset: 'destroy'
    }
    app.use(expressSession(settings));
}

// import * as expressSession from 'express-session';
// import * as RedisStore from 'connect-redis'(expressSession);
// require("express");
// export default (app, redisClient:string)=>{
//     const sessionStore = RedisStore({
//         client: redisClient,
//         unset:"destroy"
//     });
//     const settings = {
//         store: sessionStore,
//         secret:"SecretInformation",
//         cookie: { "path": '/', "httpOnly": true, "secure": false,  "maxAge": null }
//     }
//     app.use(expressSession(settings));
// }
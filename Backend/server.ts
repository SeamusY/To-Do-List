import * as express from 'express';
import config from './configuration/config';
import { Router } from './services/router';
import * as passport from 'passport';
import passportSetup from './configuration/passport-setup';
import session from './configuration/Init-session';
import redisClient from "./configuration/redis";
import Login from "./configuration/guard";
import * as path from "path";
import * as bodyParser from 'body-parser';

const port = config.PORT;
const app = express();
const router = new Router();

passportSetup(passport);
session(app, redisClient);

//initalize passport
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", router.getrouter());

app.listen(port, () => {
  console.log(`Application started at port: ${port}`);
});

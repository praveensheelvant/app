const express = require('express');
const config = require('./config/config');
const routes = require('./routes')
const log = require('./logger/index');
const connect = require('./db/connecnt');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('port', process.env.PORT);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(app.get('port'), config.server.hostname, () => {
    log.info(`Server listening at http://${config.server.hostname}:${app.get('port')}`);
    connect(config.mongo.uri, config.mongo.options);
    routes(app);
}); 


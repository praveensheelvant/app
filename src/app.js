const express = require('express');
const config = require('./config/config');
const routes = require('./routes')
const log = require('./logger/index');
const connect = require('./db/connecnt');

const app = express();

app.set('port', config.server.port);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(app.get('port'), config.server.hostname, () => {
    log.info(`Server listening at http://${config.server.hostname}:${app.get('port')}`);
    connect();
    routes(app);
});

// const dotenv = require('dotenv');

// dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.PORT || 4545;

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'praveen';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'PzHXpbnNJDt1wWjj';
const MONGO_HOST = process.env.MONGO_HOST || 'cluster0.p033h.mongodb.net';
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'myFirstDatabaset';
// const MONGO_URI = process.env.MONGO_URL || `cluster0.p033h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

// dbUri: "mongodb+srv://praveen:PzHXpbnNJDt1wWjj@cluster0.p033h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
const MONGO = {
    options: MONGO_OPTIONS,
    uri: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DBNAME}?retryWrites=true&w=majority`
};

const config = {
    server: SERVER,
    mongo: MONGO
};

module.exports = config;
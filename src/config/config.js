// const dotenv = require('dotenv');

// dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.PORT || 4545;

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'challengeUser';
const MONGO_PASSWORD = process.env.MONGO_USERNAME || 'WUMglwNBaydH8Yvu';
const MONGO_HOST = process.env.MONGO_URL || `challenge-xzwqd.mongodb.net/getircase-study?retryWrites=true`;

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
    uri: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
};

const config = {
    server: SERVER,
    mongo: MONGO
};

module.exports = config;
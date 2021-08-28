const mongoose = require('mongoose');
const config = require('../config/config');
const log = require('../logger');

module.exports = async function connect() {
    return await mongoose
        .connect(config.mongo.uri,
            config.mongo.options)
        .then(() => {
            log.info("Database connected");
        })
        .catch((err) => {
            log.error("db error", err);
            process.exit(1);
        });
}

// function close(){
//     let db = mongoose.connection;
//     db.close();
// }
const mongoose = require('mongoose');
const log = require('../logger');

module.exports = async function connect(dbUri, options) {
    return await mongoose
        .connect(dbUri, options)
        .then(() => {
            log.info("Database connected");
        })
        .catch((err) => {
            log.error("db error", err);
            process.exit(1);
        });
}

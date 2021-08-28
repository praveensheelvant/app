const logger = require("pino");
const dayjs = require("dayjs");

log = logger({
    prettyPrint: true,
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
});

module.exports = log;
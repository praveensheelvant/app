const log = require('../logger/index');
const {createRecord, getRecords} = require('../service/record.service');

let creatRecordHandler = async function (req, res) {
    try {
        const record = await createRecord(req.body);
        return res.send(record);
    } catch (err) {
        log.error(err);
        return res.status(409).send(err.message);
    }
}

let getRecordsHandler= async function (req, res) {
    try {
        const record =  await getRecords(req.body);
        // console.log(record);
        return res.send(record);
    } catch (err) {
        log.error(err);
        return res.status(409).send(err.message);
    }
}

module.exports = {
    creatRecordHandler: creatRecordHandler,
    getRecordsHandler: getRecordsHandler
}
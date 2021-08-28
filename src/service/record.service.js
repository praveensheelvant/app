const Record = require('../models/Records');
const log = require('../logger');

let createRecord = async function (input) {
    try {
        await Record.insertMany(input);
        return "inserted multiple records";
    } catch (err) {
        throw new Error(err);
    }
}

let getRecords = async function (input) {
    try {
        let { startDate, endDate, minCount, maxCount } = input;
        let data = await Record.find({
            createdAt: {
                $gte: new Date(startDate),
                $lt: new Date(endDate)
            },
            totalCount: {
                $gte: minCount,
                $lt: maxCount
            }
        }).select({ "key": 1, "totalCount": 1, "createdAt": 1, _id: false }).exec();
        if (data.length > 0) {
            let returnObj = {
                code: 0,
                msg: "Success",
                records: data
            }
            return returnObj;
        } else {
            let returnObj = {
                code: 1,
                msg: "Failure",
                records: "No data found for given input"
            }
            return returnObj;
        }
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    createRecord: createRecord,
    getRecords: getRecords
}
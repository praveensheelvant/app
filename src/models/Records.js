const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema(
    {
        key: { type: String, require: true },
        totalCount: { type: Number, require: true }
    },
    {
        timestamps: true
    }
);

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;
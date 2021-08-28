const {creatRecordHandler, getRecordsHandler} = require('./controller/record.controller');
const validateRequest = require('./validation/validateRequest');
const getRecordsSchema = require('./validation/record.schema');

module.exports = (app) => {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    
    app.post('/api/records', (req, res) => {
        creatRecordHandler(req, res);
    });
    app.post('/api/getrecords', validateRequest(getRecordsSchema), (req, res) => {
        getRecordsHandler(req, res);
    });
}
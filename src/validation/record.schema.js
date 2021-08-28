const { object, date, number } = require('yup');
const { parse, isDate } = require('date-fns');

const getRecordsSchema = object({
    body: object({
        startDate: date()
            .required("Start date is required")
            .transform(parseDateString),
        endDate: date()
            .required("End date is required")
            .transform(parseDateString),
        minCount: number().required("minCount value is required")
            .typeError('minCount must be a number'),
        maxCount: number().required("max count value is required")
            .typeError('maxCount must be a number')
    }),
});

function parseDateString(originalValue) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
}

module.exports = getRecordsSchema;
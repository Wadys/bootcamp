const {getReasonPhrase, StatusCodes} = require('http-status-codes');

function responseFormatter(req, res, next) {
    const originalJson = res.json;
    res.json = function(data) {
        const statusCode = res.statusCode !== 200 ? res.statusCode : StatusCodes.OK;
        const response = {
            status: res.statusCode >= 200 && res.statusCode < 300 ? "success" : "error",
            statusCode: res.statusCode,
            message: getReasonPhrase(res.statusCode),
            data: res.statusCode >= 200 && res.statusCode < 300 ? data : null,
            error: res.statusCode >= 200 && res.statusCode < 300 ? null : data,
        };
        originalJson.call(res, response);
    };
    next();
}

module.exports = responseFormatter;
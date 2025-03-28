const eventEmitter = require('../services/eventEmitter');

const errorHandler = (err, req, res, next) => {
    const error = {
        status: err.status || 500,
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    };

    // Emit error event
    eventEmitter.emitError(error);

    res.status(error.status).json({
        success: false,
        error: {
            message: error.message,
            ...(error.stack && { stack: error.stack })
        }
    });
};

module.exports = errorHandler;
const express = require('express');
const router = express.Router();
const eventEmitter = require('../services/eventEmitter');

// Middleware to log API requests
router.use((req, res, next) => {
    eventEmitter.emitSystemEvent('api_request', {
        method: req.method,
        path: req.path,
        query: req.query,
        body: req.body
    });
    next();
});

// Test route with event emission
router.get('/test', (req, res) => {
    eventEmitter.emitUserAction('test_endpoint_accessed', { timestamp: new Date() });
    res.json({ message: 'Backend is working!' });
});

// Example of an async route with error handling
router.post('/action', async (req, res, next) => {
    try {
        const { action, data } = req.body;
        eventEmitter.emitUserAction(action, data);
        res.json({ success: true, message: 'Action processed successfully' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
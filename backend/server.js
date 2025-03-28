const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');
const eventEmitter = require('./services/eventEmitter');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Global middleware
app.use(cors());
app.use(express.json());

// Event listeners
eventEmitter.on('user_action', (data) => {
    console.log('User Action:', data);
});

eventEmitter.on('system_event', (data) => {
    console.log('System Event:', data);
});

eventEmitter.on('error', (data) => {
    console.error('Error Event:', data);
});

// Routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
    eventEmitter.emitSystemEvent('root_access', { timestamp: new Date() });
    res.json({ message: 'Welcome to the backend API' });
});

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
    eventEmitter.emitSystemEvent('server_start', { port });
    console.log(`Server is running on port ${port}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    eventEmitter.emitError(error);
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    eventEmitter.emitError({ message: 'Unhandled Promise Rejection', reason });
    console.error('Unhandled Promise Rejection:', reason);
    process.exit(1);
});
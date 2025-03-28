const EventEmitter = require('events');

class AppEventEmitter extends EventEmitter {
    constructor() {
        super();
        this.eventTypes = {
            USER_ACTION: 'user_action',
            SYSTEM_EVENT: 'system_event',
            ERROR: 'error'
        };
    }

    emitUserAction(action, data) {
        this.emit(this.eventTypes.USER_ACTION, { action, data, timestamp: new Date() });
    }

    emitSystemEvent(event, data) {
        this.emit(this.eventTypes.SYSTEM_EVENT, { event, data, timestamp: new Date() });
    }

    emitError(error) {
        this.emit(this.eventTypes.ERROR, { error, timestamp: new Date() });
    }
}

module.exports = new AppEventEmitter();
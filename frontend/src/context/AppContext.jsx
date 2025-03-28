import { createContext, useContext, useReducer, useCallback } from 'react';

// Define action types
const ActionTypes = {
    USER_ACTION: 'USER_ACTION',
    SYSTEM_EVENT: 'SYSTEM_EVENT',
    ERROR: 'ERROR'
};

// Initial state
const initialState = {
    userActions: [],
    systemEvents: [],
    errors: [],
    loading: false
};

// Create context
const AppContext = createContext();

// Reducer function
function appReducer(state, action) {
    switch (action.type) {
        case ActionTypes.USER_ACTION:
            return {
                ...state,
                userActions: [...state.userActions, { ...action.payload, timestamp: new Date() }]
            };
        case ActionTypes.SYSTEM_EVENT:
            return {
                ...state,
                systemEvents: [...state.systemEvents, { ...action.payload, timestamp: new Date() }]
            };
        case ActionTypes.ERROR:
            return {
                ...state,
                errors: [...state.errors, { ...action.payload, timestamp: new Date() }]
            };
        default:
            return state;
    }
}

// Provider component
export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const emitUserAction = useCallback((action, data) => {
        dispatch({ type: ActionTypes.USER_ACTION, payload: { action, data } });
    }, []);

    const emitSystemEvent = useCallback((event, data) => {
        dispatch({ type: ActionTypes.SYSTEM_EVENT, payload: { event, data } });
    }, []);

    const emitError = useCallback((error) => {
        dispatch({ type: ActionTypes.ERROR, payload: { error } });
    }, []);

    const value = {
        state,
        emitUserAction,
        emitSystemEvent,
        emitError
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook for using the context
export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}
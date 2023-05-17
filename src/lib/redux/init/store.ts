// Core
import { configureStore } from '@reduxjs/toolkit';

// Instruments
import { rootReducer } from './rootReducer';

export default configureStore({
    reducer: rootReducer,
});
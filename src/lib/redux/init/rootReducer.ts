// Core
import { combineReducers } from 'redux';

import tasks from '../task/taskSlice'
import dialog from '../dialog/dialogSlice'

export const rootReducer = combineReducers({
    tasks,
    dialog
});
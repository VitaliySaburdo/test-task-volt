import { configureStore } from '@reduxjs/toolkit'
import { tasksReducer } from './task-slice'
import { filtersReducer } from './filter-slice'

export const store = configureStore({
  'reducer': {
    'tasks': tasksReducer,
    'filters': filtersReducer,
  },
})

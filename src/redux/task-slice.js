import { createSlice } from '@reduxjs/toolkit'
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations'

const handlePending = (state) => {
  state.isLoading = true
}

const handleRejected = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}

const tasksSlice = createSlice({
  'name': 'tasks',
  'initialState': {
    'taskItems': [],
    'isLoading': false,
    'error': undefined,
  },
  'extraReducers': (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = undefined
        state.taskItems = action.payload
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = undefined
        state.taskItems.push(action.payload)
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = undefined
        const index = state.taskItems.findIndex(
          (task) => task.id === action.payload.id,
        )
        state.taskItems.splice(index, 1)
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = undefined
        const index = state.taskItems.findIndex(
          (task) => task.id === action.payload.id,
        )
        state.taskItems.splice(index, 1, action.payload)
      })
      .addCase(toggleCompleted.rejected, handleRejected)
  },
})

export const tasksReducer = tasksSlice.reducer

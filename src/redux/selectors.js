import { createSelector } from '@reduxjs/toolkit'
import { statusFilters } from './constants'

export const selectTasks = (state) => state.tasks.taskItems

export const selectIsLoading = (state) => state.tasks.isLoading

export const selectError = (state) => state.tasks.error

export const selectStatusFilter = (state) => state.filters.status

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active: {
        return tasks.filter((task) => !task.completed)
      }
      case statusFilters.completed: {
        return tasks.filter((task) => task.completed)
      }
      default: {
        return tasks
      }
    }
  },
)

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  const count = { 'active': 0, 'completed': 0 }
  for (const task of tasks) {
    if (task.completed) {
      count.completed += 1
    } else {
      count.active += 1
    }
  }
  return count
})

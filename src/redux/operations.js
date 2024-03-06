import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://64673af52ea3cae8dc28c812.mockapi.io'

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (__, thunkAPI) => {
    try {
      const response = await axios.get('/task')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/task', { 'task': text })
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/task/${taskId}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/task/${task.id}`, {
        'completed': !task.completed,
      })
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
})

export const taskService = {
  getTasks: async () => {
    const response = await api.get('/tasks')
    return response.data
  },

  createTask: async (task) => {
    const response = await api.post('/tasks', task)
    return response.data
  },

  updateTask: async (id, task) => {
    const response = await api.put(`/tasks/${id}`, task)
    return response.data
  },

  deleteTask: async (id) => {
    await api.delete(`/tasks/${id}`)
  }
}
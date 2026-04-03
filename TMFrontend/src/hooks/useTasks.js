import { useEffect, useState } from 'react'
import { taskService } from '../services/taskService'

export function useTasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchTasks = async () => {
    try {
      setLoading(true)
      const data = await taskService.getTasks()
      setTasks(data)
    } catch (error) {
      console.error('Failed to fetch tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const createTask = async (task) => {
    await taskService.createTask(task)
    fetchTasks()
  }

  const updateTask = async (id, updatedTask) => {
    await taskService.updateTask(id, updatedTask)
    fetchTasks()
  }

  const deleteTask = async (id) => {
    await taskService.deleteTask(id)
    fetchTasks()
  }

  const toggleComplete = async (task) => {
    await updateTask(task.id, { ...task, completed: !task.completed })
  }

  return {
    tasks,
    loading,
    createTask,
    updateTask,
    deleteTask,
    toggleComplete
  }
}
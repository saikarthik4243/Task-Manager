import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskPage() {
  const { tasks, createTask, updateTask, deleteTask, toggleComplete } =
    useTasks();

  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null);
  const [editTask, setEditTask] = useState({ title: "", description: "" });

  const handleCreate = async (e) => {
    e.preventDefault();
    await createTask(newTask);
    setNewTask({ title: "", description: "" });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateTask(editingId, editTask);
    setEditingId(null);
    setEditTask({ title: "", description: "" });
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditTask({ title: task.title, description: task.description });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditTask({ title: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Task Manager
        </h1>

        <TaskForm
          editingId={editingId}
          newTask={newTask}
          setNewTask={setNewTask}
          editTask={editTask}
          setEditTask={setEditTask}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onCancel={handleCancel}
        />

        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onEdit={handleEdit}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default TaskPage;

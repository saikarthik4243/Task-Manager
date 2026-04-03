function TaskForm({
  editingId,
  newTask,
  setNewTask,
  editTask,
  setEditTask,
  onCreate,
  onUpdate,
  onCancel,
}) {
  return (
    <form
      onSubmit={editingId ? onUpdate : onCreate}
      className="bg-white p-6 rounded-xl shadow-lg mb-8"
    >
      <input
        type="text"
        placeholder="Title"
        value={editingId ? editTask.title : newTask.title}
        onChange={(e) =>
          editingId
            ? setEditTask({ ...editTask, title: e.target.value })
            : setNewTask({ ...newTask, title: e.target.value })
        }
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <textarea
        placeholder="Description"
        value={editingId ? editTask.description : newTask.description}
        onChange={(e) =>
          editingId
            ? setEditTask({ ...editTask, description: e.target.value })
            : setNewTask({ ...newTask, description: e.target.value })
        }
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {editingId ? "Update Task" : "Add Task"}
      </button>

      {editingId && (
        <button
          type="button"
          onClick={onCancel}
          className="w-full mt-2 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default TaskForm;

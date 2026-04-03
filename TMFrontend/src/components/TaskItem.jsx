import { formatDateTime } from "../utils/formatDateTime";

function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex justify-between items-start">
      <div className="flex-1">
        <h3
          className={`text-xl font-semibold ${
            task.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>
        <p
          className={`mt-1 ${
            task.completed ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {task.description}
        </p>
        <p className="text-sm text-gray-400 mt-2">
          {formatDateTime(task.createdAt)}
        </p>
      </div>

      <div className="flex space-x-2 ml-4">
        <button
          onClick={() => onToggleComplete(task)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            task.completed
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-yellow-500 hover:bg-yellow-600 text-white"
          }`}
        >
          {task.completed ? "Done" : "Complete"}
        </button>

        <button
          onClick={() => onEdit(task)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;

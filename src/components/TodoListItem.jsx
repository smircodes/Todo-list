import { useState } from "react";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";

export default function TodoListItem({ todo, onDelete, onToggle, onEdited }) {
  const [editMode, setEditMode] = useState(false);

  const editTodoHandler = (e) => {
    if (e.key === "Enter") {
      // console.log(e.target.value);
      onEdited(todo, e.target.value);
      setEditMode(false);
    }
  };
  return (
    <li className="relative flex items-center justify-between px-2 py-6 border-b">
      {editMode ? (
        <div className="w-full flex items-center">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-200 rounded"
            defaultValue={todo?.title}
            onKeyDown={editTodoHandler}
            onChange={() => {}}
          />
          <DeleteIcon
            className="ml-2"
            onClick={() => {
              setEditMode(false);
            }}
          />
        </div>
      ) : (
        <div className="flex items-center">
          <div>
            <input
              type="checkbox"
              className=""
              onChange={() => {
                onToggle(todo.id);
              }}
              checked={todo?.status}
            />
            <p
              className={`inline-block mt-1 ml-2 text-gray-600 ${
                todo?.status ? "line-through" : ""
              }`}
            >
              {todo?.title}
            </p>
          </div>
          <button
            type="button"
            className="absolute right-0 flex items-center space-x-1"
          >
            <EditIcon onClick={() => setEditMode(true)} />

            <DeleteIcon
              onClick={() => {
                onDelete(todo.id);
              }}
            />
          </button>
        </div>
      )}
    </li>
  );
}

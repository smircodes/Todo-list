import TodoListItem from "./TodoListItem.jsx";

export default function TodoList({ children }) {
  return (
    <div>
      <ul className="list-reset">{children}</ul>
    </div>
  );
}

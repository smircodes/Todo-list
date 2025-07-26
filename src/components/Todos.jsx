import TodoList from "./TodoLists";
import TodoListItem from "./TodoListItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  const [todos, setTodos] = useState([
    {
      title: " Tailwind CSS To DO App List 1",
      status: false,
      id: uuidv4(),
    },
    {
      title: "Tailwind CSS To DO App List 2",
      status: true,
      id: uuidv4(),
    },
    {
      title: "Tailwind CSS To DO App List 3",
      status: false,
      id: uuidv4(),
    },
  ]);
  // const todos = [
  //   {
  //     title: " Tailwind CSS To DO App List 1",
  //     status: false,
  //   },
  //   {
  //     title: "Tailwind CSS To DO App List 2",
  //     status: true,
  //   },
  //   {
  //     title: "Tailwind CSS To DO App List 3",
  //     status: false,
  //   },
  // ];
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTodos((prevTodo) => [
        ...prevTodo,
        { title: inputValue, status: false, id: uuidv4() },
      ]);
      setInputValue("");
    }
  };

  const deleteTodoHandler = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
    console.log("After delete:", updatedTodos);
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
          <div className="flex items-center mb-6">
            <h1 className="mr-6 text-4xl font-bold text-purple-600">
              {" "}
              TO DO APP
            </h1>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="What needs to be done today?"
              className="w-full px-2 py-3 border rounded outline-none border-grey-600"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <TodoList>
            {todos.map((todo) => (
              <TodoListItem
                todo={todo}
                key={todo.id}
                onDelete={deleteTodoHandler}
              />
            ))}
          </TodoList>
        </div>
      </div>
    </div>
  );
}

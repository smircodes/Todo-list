import TodoList from "./TodoLists";
import TodoListItem from "./TodoListItem";
import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([
    {
      title: " Tailwind CSS To DO App List 1",
      status: false,
    },
    {
      title: "Tailwind CSS To DO App List 2",
      status: true,
    },
    {
      title: "Tailwind CSS To DO App List 3",
      status: false,
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
              onChange={(e) => setTodos(e.target.value)}
            />
          </div>
          <TodoList>
            {todos.map((todo, index) => (
              <TodoListItem todo={todo} key={index} />
            ))}
          </TodoList>
        </div>
      </div>
    </div>
  );
}

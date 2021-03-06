import React, { memo } from "react";
import { ITodo } from "../interfaces";
import { useAtom } from "jotai";
import { todosAtom } from "../store";

const Todo = (props: { todo: ITodo }) => {
  const { todo } = props;
  const [, setTodos] = useAtom(todosAtom);

  const handleDelete = () => {
    setTodos((todos: ITodo[]) => todos.filter((item) => item.id !== todo.id));
  };

  const handleCheck = () => {
    setTodos((todos: ITodo[]) =>
      todos.map((item) => {
        if (item.id === todo.id) return { ...todo, check: !todo.check };
        return item;
      })
    );
  };

  const cls = (...classnames: string[]) => {
    return classnames.join(" ");
  };

  return (
    <li
      className=" flex cursor-pointer list-none items-center justify-between py-2"
      onClick={handleCheck}
    >
      <span
        className={cls(
          "mr-5 text-3xl",
          todo.check ? "text-gray-400 line-through" : ""
        )}
      >
        {todo.name}
      </span>
      <div className="flex items-center">
        <button
          className={cls(
            "mr-2 h-8 w-8 rounded-[50%] border-2 border-solid border-[#2096f3]",
            todo.check
              ? "border-none bg-[url('../public/check.png')] bg-cover bg-center bg-no-repeat"
              : ""
          )}
          onClick={handleCheck}
        ></button>
        <button className="text-2xl" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default memo(Todo);

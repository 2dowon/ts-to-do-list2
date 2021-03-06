import React, { memo, useRef, KeyboardEvent } from "react";
import { useAtom } from "jotai";
import { todosAtom } from "../store";

const AddForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [, setTodos] = useAtom(todosAtom);
  const handleAdd = (name: string) => {
    setTodos((todos) => [...todos, { id: Date.now(), name, check: false }]);
  };

  const addTodo = (): void => {
    const name = inputRef.current?.value;
    name && handleAdd(name);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className="absolute bottom-0 z-10 flex h-10 w-[90vw] items-center bg-white pb-4 sm:w-[450px]">
      <button className="mr-5 text-2xl text-[#2096f3]" onClick={addTodo}>
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <input
        ref={inputRef}
        className="h-10 w-[400px] text-2xl focus:outline-none "
        type="text"
        placeholder="Create a new Todo"
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default memo(AddForm);

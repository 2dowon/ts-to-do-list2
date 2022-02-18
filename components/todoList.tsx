import React, { useEffect } from "react";
import Todo from "./todo";
import { ITodo } from "../interfaces";
import { useAtom } from "jotai";
import { todosAtom } from "../store";

let fullfilled = false;
let promise: Promise<void> | null = null;

const useTimeout = (ms: number) => {
  if (!fullfilled) {
    throw (promise ||= new Promise((res) => {
      setTimeout(() => {
        fullfilled = true;
        res();
      }, ms);
    }));
  }
};

const TodoList = () => {
  useTimeout(1000);
  const [todos, setTodos] = useAtom(todosAtom);

  const _todo: ITodo[] = [
    { id: 1, name: "hello", check: false },
    { id: 2, name: "suspense", check: false },
  ];
  useEffect(() => {
    setTodos(_todo);
  }, []);

  return (
    <ul className=" mt-28 h-[90vh] overflow-y-auto sm:mt-24 sm:h-[50vh]">
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

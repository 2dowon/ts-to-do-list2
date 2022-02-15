import { atom } from "jotai";
import { Todo } from "./interfaces";

export const todosAtom = atom<Todo[]>([]);

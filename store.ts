import { atom } from "jotai";
import { ITodo } from "./interfaces";

export const todosAtom = atom<ITodo[]>([]);

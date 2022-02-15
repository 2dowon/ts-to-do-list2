import React, { memo } from "react";
import { useAtom } from "jotai";
import { todosAtom } from "../store";

const Header = () => {
  const [todos] = useAtom(todosAtom);

  const today = new Date();
  const date = today.getDate();
  const year = today.getFullYear();

  const arrMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = arrMonths[today.getMonth()];

  const arrDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = arrDays[today.getDay()];

  return (
    <header className="fixed top-[12vh] w-[450px] bg-white pr-3">
      <section className="flex justify-between">
        <div className="flex items-center">
          <span className="mr-1 text-4xl font-bold">{date}</span>
          <div className="block">
            <div className="text-sm text-gray-900">{month}</div>
            <div className="text-sm text-gray-900">{year}</div>
          </div>
        </div>
        <span className="flex items-center text-3xl font-bold text-gray-900">
          {day}
        </span>
      </section>
      <section className="my-5 flex items-center justify-between text-4xl font-extrabold text-[#2096f3]">
        <h1 className="text-4xl">TO DO LIST</h1>
        <span>{todos.length}</span>
      </section>
    </header>
  );
};

export default memo(Header);

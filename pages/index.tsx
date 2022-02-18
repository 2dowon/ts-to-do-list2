import React, { Suspense } from "react";
import type { NextPage } from "next";

import Header from "../components/header";
import AddForm from "../components/addForm";
import TodoList from "../components/todoList";

const Home: NextPage = () => {
  return (
    <div>
      <div className="relative h-screen w-screen rounded-lg bg-white p-7 shadow-md sm:h-[80vh] sm:w-[500px]">
        <Header />
        <Suspense fallback={"Loading..."}>
          <TodoList />
        </Suspense>
        <AddForm />
      </div>
    </div>
  );
};

export default Home;

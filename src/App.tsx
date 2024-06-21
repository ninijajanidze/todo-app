import { useState, KeyboardEvent } from "react";

type TodoType = {
  id: number;
  title: string;
  isDone: boolean;
};

import CoverLight from "/images/bg-mobile-light.jpg";
import Moon from "/images/icon-moon.svg";
import Sun from "/images/icon-sun.svg";
import CoverDark from "/images/bg-mobile-dark.jpg";
import CoverDesktopLight from "/images/bg-desktop-light.jpg";
import CoverDesktopDark from "/images/bg-desktop-dark.jpg";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<TodoType[]>(
    []
  );
  const [filter, setFilter] =
    useState<string>("All");
  const [isNightMode, setIsNightMode] =
    useState<boolean>(false);

  const addTodo = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    const inputElement =
      event.target as HTMLInputElement;
    if (
      event.key === "Enter" &&
      inputElement.value.trim() !== ""
    ) {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          title: inputElement.value,
          isDone: false,
        },
      ]);
      inputElement.value = "";
    }
  };

  const toggleTheme = (): void => {
    setIsNightMode(!isNightMode);
  };

  const deleteTodo = (todoId: number): void => {
    setTodos(
      todos.filter((item) => item.id !== todoId)
    );
  };

  const markTodo = (todoId: number): void => {
    const markIndex = todos.findIndex(
      (item) => item.id == todoId
    );
    todos[markIndex].isDone =
      !todos[markIndex].isDone;
    setTodos([...todos]);
  };

  const clearCompleted = (): void => {
    setTodos(
      todos.filter((item) => !item.isDone)
    );
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "Active":
        return todos.filter(
          (todo) => !todo.isDone
        );
      case "Completed":
        return todos.filter(
          (todo) => todo.isDone
        );
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  const todoCounter = todos.filter(
    (todo) => !todo.isDone
  ).length;

  return (
    <div
      className={`${
        isNightMode
          ? "bg-[#171823]"
          : "bg-[#fafafa]"
      } pb-[72px] md:pb-[52px] min-h-screen`}
    >
      <div className="w-[375px] md:w-[1440px]">
        <header className="flex relative">
          <img
            src={
              isNightMode ? CoverDark : CoverLight
            }
            alt="cover image"
            className="md:hidden block"
          />
          <img
            src={
              isNightMode
                ? CoverDesktopDark
                : CoverDesktopLight
            }
            alt="cover image"
            className="md:block hidden"
          />
          <div
            className="flex absolute items-center mt-[48px] mr-[24px] ml-[24px] justify-between w-[325px] h-[20px]
          md:mt-[70px] md:mr-[450px] md:ml-[450px] md:w-[541px] md:h-[48px]"
          >
            <h1 className="text-[25px] text-white tracking-[12px] font-bold mt-[6px] md:text-[40px]">
              TODO
            </h1>
            <img
              src={isNightMode ? Sun : Moon}
              alt="theme toggle icon"
              className="w-[20px] h-[20px] cursor-pointer md:w-[26px] md:h-[26px]"
              onClick={toggleTheme}
            />
          </div>
        </header>

        <AddTodo
          isNightMode={isNightMode}
          addTodo={addTodo}
        />
        <Todo
          isNightMode={isNightMode}
          filteredTodos={filteredTodos}
          deleteTodo={deleteTodo}
          markTodo={markTodo}
          clearCompleted={clearCompleted}
          todoCounter={todoCounter}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <p
        className={`${
          isNightMode
            ? "text-[#5b5e7e]"
            : "text-[#9495a5]"
        } 'text-[14px] mt-[40px] ml-[24px] text-center w-[327px] md:ml-[620px] md:w-[187px] md:mt-[49px] md:text-[14px]`}
      >
        Drag and drop to reorder list
      </p>
    </div>
  );
}

export default App;

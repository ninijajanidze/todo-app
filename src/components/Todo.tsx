import Delete from "/images/icon-cross.svg";

type TodoType = {
  id: number;
  title: string;
  isDone: boolean;
};

export default function Todo({
  isNightMode,
  filteredTodos,
  markTodo,
  deleteTodo,
  clearCompleted,
  todoCounter,
  filter,
  setFilter,
}: {
  isNightMode: boolean;
  filteredTodos: TodoType[];
  markTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  clearCompleted: () => void;
  todoCounter: number;
  filter: string;
  setFilter: (filter: string) => void;
}) {
  return (
    <div>
      <div
        className={`${
          isNightMode
            ? "bg-[#25273d] [box-shadow:0_35px_50px_-15px_rgba(0,_0,_0,_0.5)]"
            : "bg-[#fff] [box-shadow:0_35px_50px_-15px_rgba(194,_195,_214,_0.5)] "
        } 
    relative flex rounded-[5px] w-[327px] mt-[-25px] ml-[24px]
    md:w-[540px] md:mt-[-50px] md:ml-[450px]`}
      >
        <ul>
          {filteredTodos.map((item: TodoType) => (
            <li
              className={`pt-[19px] pb-[21px] px-[20px] flex items-center space-between w-[327px] ${
                isNightMode ? "border-b-[#393a4b]" : "border-b-[#e3e4f1]"
              } border-b 
      md:w-[540px] md:h-[63px] md:px-[24px]`}
              key={item.id}
            >
              <input
                type="checkbox"
                checked={item.isDone}
                id="custom-checkbox"
                onChange={() => markTodo(item.id)}
                className={`${
                  isNightMode
                    ? "border-[solid] border-[1px] border-[#393a4b]"
                    : "border-[solid] border-[1px] border-[#d1d2da"
                } relative w-[20px] h-[20px] mr-[12px] cursor-pointer
       md:w-[24px] md:h-[24px] md:mr-[24px] hover:border-purple-400`}
              />
              <span
                className={`${
                  item.isDone
                    ? isNightMode
                      ? "line-through text-[#4d5067]"
                      : "line-through text-[#d1d2da]"
                    : isNightMode
                    ? "text-[#cacde8]"
                    : "text-[#494c6b]"
                } flex-grow text-[12px] md:text-[18px] md:mt-[3px] cursor-pointer`}
              >
                {item.title}
              </span>
              <img
                onClick={() => deleteTodo(item.id)}
                src={Delete}
                alt="delete icon"
                className="w-[12px] h-[12px] cursor-pointer md:w-[16px] md:h-[16px]"
              />
            </li>
          ))}
          <div
            className={`${
              isNightMode
                ? "bg-[#25273d] [box-shadow:0_35px_50px_-15px_rgba(0,_0,_0,_0.5)]"
                : "bg-[#fff] [box-shadow:0_35px_50px_-15px_rgba(194,_195,_214,_0.5)]"
            } flex justify-between pt-[16px] px-[20px] pb-[22px] w-[327px] md:hidden`}
          >
            <span
              className={`${
                isNightMode ? "text-[#5b5e7e]" : "text-[#9495a5]"
              } text-[12px]`}
            >
              {todoCounter} items left
            </span>
            <span
              className={`${
                isNightMode ? "text-[#5b5e7e]" : "text-[#9495a5]"
              } text-[12px] cursor-pointer`}
              onClick={clearCompleted}
            >
              Clear Completed
            </span>
          </div>

          <div
            className={`hidden md:flex ${
              isNightMode
                ? "bg-[#25273d] text-[#5b5e7e] [box-shadow:0_35px_50px_-15px_rgba(0,_0,_0,_0.5)]"
                : "bg-white text-[#9495a5] [box-shadow:0_35px_50px_-15px_rgba(194,_195,_214,_0.5)]"
            } 
      justify-between items-center pt-[15px] px-[80px] pb-[19px] w-full md:w-[540px] mt-[16px] rounded-[5px] z-20 md:px-[24px] md:mt-[0px] md:h-[50px]`}
          >
            <span className="text-[12px]">{todoCounter} items left</span>

            <div className="flex space-x-4">
              <span
                className={`text-[14px] font-bold cursor-pointer ${
                  filter === "All" ? "text-[#3a7cfd]" : ""
                }`}
                onClick={() => setFilter("All")}
              >
                All
              </span>
              <span
                className={`text-[14px] font-bold cursor-pointer ${
                  filter === "Active" ? "text-[#3a7cfd]" : ""
                }`}
                onClick={() => setFilter("Active")}
              >
                Active
              </span>
              <span
                className={`text-[14px] font-bold cursor-pointer ${
                  filter === "Completed" ? "text-[#3a7cfd]" : ""
                }`}
                onClick={() => setFilter("Completed")}
              >
                Completed
              </span>
            </div>
            <span
              className="text-[12px] cursor-pointer"
              onClick={clearCompleted}
            >
              Clear Completed
            </span>
          </div>
        </ul>
      </div>

      <div
        className={`${
          isNightMode
            ? "bg-[#25273d] text-[#5b5e7e] [box-shadow:0_35px_50px_-15px_rgba(0,_0,_0,_0.5)])"
            : "bg-white text-[#9495a5] [box-shadow:0_35px_50px_-15px_rgba(194,_195,_214,_0.5]"
        } 
     flex justify-between pt-[15px] px-[80px] pb-[19px] w-[327px] mt-[16px] ml-[24px] rounded-[5px] z-20 md:hidden`}
      >
        <span
          className={`text-[14px] font-bold cursor-pointer ${
            filter === "All"
              ? "text-[#3a7cfd]"
              : isNightMode
              ? "text-[#5b5e7e]"
              : "text-[#9495a5]"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </span>
        <span
          className={`text-[14px] font-bold cursor-pointer ${
            filter === "Active"
              ? "text-[#3a7cfd]"
              : isNightMode
              ? "text-[#5b5e7e]"
              : "text-[#9495a5]"
          }`}
          onClick={() => setFilter("Active")}
        >
          Active
        </span>
        <span
          className={`text-[14px] font-bold cursor-pointer ${
            filter === "Completed"
              ? "text-[#3a7cfd]"
              : isNightMode
              ? "text-[#5b5e7e]"
              : "text-[#9495a5]"
          }`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </span>
      </div>
    </div>
  );
}

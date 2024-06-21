import { KeyboardEvent } from "react";

export default function AddTodo({
  isNightMode,
  addTodo,
}: {
  isNightMode: boolean;
  addTodo: (event: KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input
        type="checkbox"
        id="custom-checkbox-1"
        className={`${
          isNightMode
            ? "border-[solid] border-[1px] border-[#393a4b]"
            : "border-[solid] border-[1px] border-[#d1d2da"
        } absolute mt-[-79px] ml-[43px] z-10 w-[20px] h-[20px] cursor-pointer 
    md:mt-[-122px] md:ml-[474px] md:w-[24px] md:h-[24px] hover:border-purple-400`}
      />
      <input
        placeholder="Create a new todo…"
        type="text"
        className={`${
          isNightMode
            ? "bg-[#25273d] text-[#767992]"
            : "bg-white text-[#494c6b]"
        } w-[327px] h-[48px] absolute mt-[-92px] ml-[24px] rounded-[5px] text-[12px] pl-[52px] border-0 outline-none
    md:mt-[-140px] md:ml-[449px] md:w-[540px] md:h-[64px] md:text-[18px] md:pl-[72px] cursor-pointer`}
        onKeyDown={addTodo}
      />
    </div>
  );
}

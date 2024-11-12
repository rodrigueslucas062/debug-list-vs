"use client";

import { useState } from "react";
import { ChecklistData } from "../data/Checklist";

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalItems = ChecklistData.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  const progress = (checkedCount / totalItems) * 100;

  return (
    <div className="space-y-8 p-4 border border-violet-400 rounded-xl">
      {ChecklistData.map((item, index) => (
        <div key={index} className="flex flex-col space-y-1 text-white">
          <label
            htmlFor={item.question}
            className="flex cursor-pointer items-center group"
          >
            <input
              type="checkbox"
              id={item.question}
              value=""
              className="size-4 appearance-none border cursor-pointer rounded-md mr-2 border-violet-500 checked:bg-no-repeat hover:bg-violet-100 checked:bg-center checked:border-violet-500 checked:bg-violet-100 transition-transform duration-200 transform hover:scale-105"
              onChange={() => handleCheckboxChange(item.question)}
            />
            {item.question}
          </label>
          <span className="p-2 text-xs text-white bg-black rounded-md ">
            {item.description}
          </span>
        </div>
      ))}
      <div className="sticky bottom-4 w-full bg-zinc-950/90 p-2 backdrop-blur-sm rounded-2xl">
        <div className="h-5 bg-violet-300 rounded-full relative">
          <div
            className="h-full bg-purple-500 rounded-full transition-width duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
          <p className="absolute inset-0 flex items-center justify-center text-zinc-900 text-sm font-semibold">
            {Math.round(progress)}% concluído
          </p>
        </div>
      </div>
    </div>
  );
}

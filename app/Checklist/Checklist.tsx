"use client";

import { useState } from "react";
import { ChecklistData, IChecklist } from "../data/Checklist";
import { Trash } from "phosphor-react";

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCardClick = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClearAll = () => {
    setCheckedItems({});
  };

  const totalItems = ChecklistData.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / totalItems) * 100;

  const groupedByCategory = ChecklistData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, IChecklist[]>);

  return (
    <div className="space-y-8 p-4 border border-violet-400 rounded-xl">
      {Object.keys(groupedByCategory).map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-white">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedByCategory[category].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col p-4 rounded-xl border border-zinc-900 duration-100 cursor-pointer ${
                  checkedItems[item.question]
                    ? "bg-white/40 translate-y-1 shadow-[4px_4px_0px_rgba(0,0,0,0.75)]"
                    : "shadow-[8px_8px_0px_rgba(0,0,0,0.75)] bg-zinc-800"
                }`}
                onClick={() => handleCardClick(item.question)}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <span className="p-2 text-xs text-white bg-black rounded-md">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
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
      <div className="flex justify-center mt-4 ">
        <button
          onClick={handleClearAll}
          className="flex justify-center items-center gap-2 w-1/3 hover:bg-red-500 hover:text-white border border-red-500 py-2 rounded-xl text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Limpar Seleção
          <Trash weight="duotone" size={20}/>
        </button>
      </div>
    </div>
  );
}

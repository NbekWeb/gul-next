"use client";

import { useState } from "react";
import List from "./List";
import Filtr from "./Filtr";

export default function Lists() {
  const [selectIndex, setSelectIndex] = useState(0);

  const names = [
    "Букеты",
    "пионовидные розы",
    "Сезонные букеты",
    "Пионы",
    "Сборные букеты",
    "Монобукеты",
    "Коробки с Цветами",
    "Монобукеты",
  ];

  return (
    <div className="">
      <span className="mt-5 text-3xl font-semibold text-dark-400 max-sm:text-2xl">
        Каталог цветов
      </span>
      <div className="!max-w-full mt-5 overflow-x-hidden ">
        <div className="flex gap-2.5  flex-nowrap overflow-x-auto pb-2 custom-scrollbar">
          {names.map((name, index) => (
            <List
              key={index}
              name={name}
              selected={selectIndex === index}
              onClick={() => setSelectIndex(index)}
            />
          ))}
        </div>
      </div>
      <Filtr />
    </div>
  );
}

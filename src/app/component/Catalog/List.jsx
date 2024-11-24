"use client";

import Icon from "../Icon";

export default function List({ name = "Букеты", selected = false,onClick  }) {
  return (
    <div
    onClick={onClick}
      className={`flex items-center px-5 bg-gray-100 py-3 rounded-xl text-dark-400 hover:text-white hover:bg-green-800 group hover:cursor-pointer ${
        selected && "bg-green-800 text-white"
      }`}
    >
      <div className="flex gap-1.5">
        <div
          className={`flex items-center justify-center border rounded-full border-dark-400 w-7 h-7 group-hover:text-green-800 group-hover:border-transparent group-hover:bg-white ${
            selected && "border-transparent text-green-800 bg-white"
          }`}
        >
          <Icon type="check" />
        </div>
        <p className="whitespace-nowrap">{name}</p>
      </div>
    </div>
  );
}

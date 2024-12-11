"use client";

import Icon from "../Icon";

export default function List({ name = "Букеты", selected = false,onClick  }) {
  return (
    <div
    onClick={onClick}
      className={`flex max-sm:py-1.5 items-center px-5 max-sm:px-3 max-sm:rounded-md  bg-gray-100 py-3 rounded-xl text-dark-400 hover:text-white hover:bg-green-800 group hover:cursor-pointer ${
        selected && "bg-green-800 text-white"
      }`}
    >
      <div className="flex gap-1.5 items-center">
        <div
          className={`flex items-center max-sm:w-5 max-sm:h-5 max-sm:text-xs justify-center border rounded-full border-dark-400 w-7 h-7 group-hover:text-green-800 group-hover:border-transparent group-hover:bg-white ${
            selected && "border-transparent text-green-800 bg-white"
          }`}
        >
          <Icon type="check" />
        </div>
        <p className="text-base capitalize whitespace-nowrap">{name}</p>
      </div>
    </div>
  );
}

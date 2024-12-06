"use client";

import { useEffect, useState } from "react";
import { Slider, Select } from "antd";
import Icon from "../Icon";

const formatter = (value) => `${value} ₽`;

export default function List() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering the Slider on the server
  }

  return (
    <div className="">
      <div className="grid grid-cols-2 py-4 bg-gray-100 rounded-3xl px-7 mt-2.5">
        <div className="flex gap-4 ">
          <span className="text-2xl font-semibold text-dark-400">Цена</span>
          <div className="relative flex-grow py-3">
            <Slider
              range
              defaultValue={[0, 20000]}
              min={0}
              max={20000}
              tooltip={{ open: true, formatter }}
            />
          </div>
        </div>
        <div className="flex justify-end gap-7 ">
          <div className="flex items-center px-5 text-lg font-medium text-white bg-green-800 border rounded-3xl">
            Применить
          </div>
          <div className="flex items-center px-5 py-2 text-lg font-medium bg-white text-dark-400 rounded-3xl">
            Сбросить
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 mb-5 ">
        <span className="text-lg font-semibold text-dark-400">Найдено 102</span>
        <div>
          <Select
            defaultValue="Сначала дешевле"
            suffixIcon={
              <span className="bg-pink-500 text-[8px] text-white w-5 h-5 flex justify-center items-center rounded-full">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.85671 0.70194C8.68607 0.701976 8.52244 0.76979 8.4018 0.890465L5.45102 3.84124C5.32868 3.95866 5.16568 4.02423 4.99612 4.02423C4.82655 4.02423 4.66355 3.95866 4.54121 3.84124L1.59043 0.890465C1.46908 0.773259 1.30655 0.708405 1.13784 0.70987C0.969135 0.711337 0.807754 0.779006 0.688457 0.898303C0.56916 1.0176 0.50149 1.17898 0.500024 1.34769C0.498558 1.51639 0.563413 1.67892 0.680619 1.80028L3.6314 4.75106C3.99919 5.10203 4.48805 5.29785 4.99644 5.29785C5.50483 5.29785 5.99368 5.10203 6.36148 4.75106L9.31161 1.80028C9.40157 1.71029 9.46283 1.59566 9.48764 1.47086C9.51246 1.34607 9.49972 1.21671 9.45103 1.09916C9.40234 0.981605 9.31989 0.881124 9.21411 0.810421C9.10832 0.739718 8.98394 0.701967 8.85671 0.70194Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            }
            style={{ width: 200 }}
          >
            <Select.Option value="price">Сначала дешевле</Select.Option>
            <Select.Option value="newest">Сначала новые</Select.Option>
          </Select>
        </div>
      </div>
    </div>
  );
}
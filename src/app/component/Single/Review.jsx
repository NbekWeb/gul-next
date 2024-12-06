"use client";

import { Rate } from "antd";

export default function Round() {
  return (
    <>
      <div className="flex gap-5 text-lg text-dark-400">
        <img src="/img/rew.png" className="w-40 h-40 rounded-3xl" />
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-0 text-white bg-pink-500 rounded-full w-11 h-11">
              <span className="">
                05
                <span className="text-[8px] ">авг.</span>
              </span>
            </div>
            <span className="font-medium">Юлия</span>
            <Rate disabled allowHalf defaultValue={5} />
          </div>
          <p className="text-sm ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen
          </p>
        </div>
      </div>
    </>
  );
}

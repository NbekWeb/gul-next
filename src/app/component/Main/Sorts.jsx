"use client";

import Saws from "../Catalog/Saws";

export default function Round() {
  return (
    <>
      <div>
        <span className="mt-10 text-4xl font-semibold text-dark-400">
          Сорта роз
        </span>
        <div className="grid grid-cols-4 gap-5 pt-5 pb-32">
          <Saws />
          <Saws />
          <Saws />
          <Saws />
          <Saws />
          <Saws />
          <Saws />
          <Saws />
        </div>
      </div>
    </>
  );
}

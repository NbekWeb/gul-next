"use client";

import { useState } from "react";
import CatalogCard from "../Card/CatalogCard";
import Saws from "../Catalog/Saws";
import { Pagination } from "antd";

export default function List() {
  const [currentPage, setCurrentPage] = useState(6); // Controlled state for current page

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update the current page
    console.log("Current page:", page);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        <CatalogCard />
        <CatalogCard type="new" />
        <CatalogCard type="new" />
        <CatalogCard />
        <CatalogCard type="minus" />
        <CatalogCard type="minus" />
        <CatalogCard />
        <CatalogCard type="top" />
        <CatalogCard type="top" />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard type="top" />
        <CatalogCard />
        <CatalogCard type="new" />
        <CatalogCard />
        <CatalogCard type="minus" />
      </div>
      <div className="mt-10 flex justify-center pb-4">
        <Pagination
          current={currentPage} // Controlled pagination
          onChange={handlePageChange} // Handler for page change
          total={500}
          showSizeChanger={false} // Hide the size changer
        />
      </div>
      <div>
        <span className="text-4xl font-semibold text-dark-400 mt-10">
          Вы смотрели
        </span>
        <div className="pt-5 grid grid-cols-6 gap-5 pb-32">
          <Saws />
          <Saws />
          <Saws />
          <Saws />
          <Saws />
          <Saws />
        </div>
      </div>
    </div>
  );
}

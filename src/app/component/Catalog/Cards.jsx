"use client";

import { useState } from "react";
import CatalogCard from "../Card/CatalogCard";
import Saws from "../Catalog/Saws";
import See from "../Main/See";
import { Pagination } from "antd";

export default function List() {
  const [currentPage, setCurrentPage] = useState(6); // Controlled state for current page

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update the current page
    console.log("Current page:", page);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 max-lg:gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-2.5">
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
      <div className="flex justify-center pb-4 mt-10 overflow-x-hidden ">
        <Pagination
          current={currentPage} // Controlled pagination
          onChange={handlePageChange} // Handler for page change
          total={500}
          responsive
          showLessItems
          showSizeChanger={false}
          className="max-sm:!hidden"
        />
        <div className="cards">
          <Pagination
            current={currentPage} // Controlled pagination
            onChange={handlePageChange} // Handler for page change
            total={500}
            responsive
            showLessItems
            simple
            showSizeChanger={false}
            className="sm:!hidden"
          />
        </div>
      </div>
      <See />
    </div>
  );
}

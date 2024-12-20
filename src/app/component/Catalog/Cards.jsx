"use client";

import { useState, useEffect } from "react";
import CatalogCard from "../Card/CatalogCard";
import See from "../Main/See";
import { Pagination } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function List({ data = [], total = 0, categories = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", page);
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    const page = searchParams.get("page");
    setCurrentPage(page ? Number(page) : 1);
  }, [searchParams]);

  return (
    <div>
      <div className="grid pb-8  grid-cols-4 gap-5 max-lg:gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-2.5">
        {data.map((item, i) => (
          <CatalogCard key={i} data={item} />
        ))}
      </div>
      {Math.ceil(total / 20) > 1 && (
        <div className="flex justify-center mt-10 overflow-x-hidden ">
          <Pagination
            current={currentPage} // Controlled pagination
            onChange={handlePageChange} // Handler for page change
            total={Math.ceil(total / 20)}
            pageSize={20}
            responsive
            showLessItems
            showSizeChanger={false}
            className="max-sm:!hidden"
          />
          <div className="cards">
            <Pagination
              current={currentPage} // Controlled pagination
              onChange={handlePageChange} // Handler for page change
              total={Math.ceil(total / 20)}
              pageSize={20}
              responsive
              showLessItems
              simple
              showSizeChanger={false}
              className="sm:!hidden"
            />
          </div>
        </div>
      )}
    </div>
  );
}

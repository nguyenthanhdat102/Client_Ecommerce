import React from "react";

import TitlePage from "../../components/TitlePage";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

const CategoryPage = () => {
   return (
      <>
         <TitlePage
            title={"Danh mục sản phẩm"}
            placeholder={"Tìm kiếm danh mục"}
         />
         <Table />
         <Pagination />
      </>
   );
};

export default CategoryPage;

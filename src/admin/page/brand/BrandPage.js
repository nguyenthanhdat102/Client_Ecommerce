import React from "react";

import TitlePage from "../../components/TitlePage";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

const BrandPage = () => {
   return (
      <>
         <TitlePage
            title={"Thương hiệu"}
            placeholder={"Tìm kiếm tên thương hiệu"}
         />
         <Table />
         <Pagination />
      </>
   );
};

export default BrandPage;

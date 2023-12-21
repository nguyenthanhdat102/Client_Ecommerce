import React from "react";
// ======================================
import Pagination from "../../components/Pagination";
import TitlePage from "../../components/TitlePage";
import Table from "../../components/Table";

const ProductPage = () => {
   return (
      <>
         <TitlePage
            title={"Sản phẩm"}
            placeholder={"Tìm kiếm tên sản sản phẩm"}
         />
         <Table />
         <Pagination />
      </>
   );
};

export default ProductPage;

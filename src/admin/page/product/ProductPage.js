import React, { useEffect, useState } from "react";
// ======================================
import Pagination from "../../components/Pagination";
import TitlePage from "../../components/HeaderChildPage";

import { getProducts } from "../../../service/api/productApi";

const ProductPage = () => {
   // const [products, setProducts] = useState([]);
   // useEffect(() => {
   //    getProducts({}).then((x) => console.log(x))
   // }, [])
   return (
      <>
         <TitlePage
            title={"Sản phẩm"}
            placeholder={"Tìm kiếm tên sản sản phẩm"}
         />
         <Pagination />
      </>
   );
};

export default ProductPage;

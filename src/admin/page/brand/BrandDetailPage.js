import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getBrand, updateBrand } from "../../../service/api/brandApi";
import { toast } from "react-toastify";

const BrandDetailPage = () => {
   const { id } = useParams();
   const [data, setData] = useState({});
   const [input, setInput] = useState({});
   const navigate = useNavigate();

   useEffect(() => {
      getBrand(id, {}).then(({ data }) => {
         setData(data.data);
      });
   }, [id]);

   const handleInput = (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
   };

   const handleUpdateBrand = () => {
      updateBrand(id, input, {})
         .then(() => {
            toast.success("Sửa thương hiệu thành công !");
            navigate("/admin/brand");
         })
         .catch((err) => {
            toast.error("Sửa thương hiệu thất bại !", err);
         });
   };
   return (
      <>
         <div className="card">
            <div className="card-body">
               <h5 className="card-title fw-semibold mb-4">
                  Chỉnh sửa thương hiệu "{data.name}"
               </h5>
               <div className="card">
                  <div className="card-body">
                     <div className="mb-3">
                        <label className="form-label">Tên thương hiệu</label>
                        <input
                           type="text"
                           className="form-control"
                           aria-describedby="formHelp"
                           onChange={handleInput}
                           name="name"
                           defaultValue={data.name}
                        />
                        {/* <div id="emailHelp" className="form-text">
                              We'll never share your email with anyone else.
                           </div> */}
                     </div>
                     <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleUpdateBrand}
                     >
                        Lưu lại
                     </button>
                  </div>
               </div>
               <Link to="/admin/brand" className="btn btn-outline-secondary">
                  Quay lại
               </Link>
            </div>
         </div>
      </>
   );
};

export default BrandDetailPage;

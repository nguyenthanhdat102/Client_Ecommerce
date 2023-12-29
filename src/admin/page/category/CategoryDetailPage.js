import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getCategory, updateCategory } from "../../../service/api/categoryApi";
import { toast } from "react-toastify";

const CategoryDetailPage = () => {
   const { id } = useParams();
   const [data, setData] = useState({});
   const [input, setInput] = useState({});
   const navigate = useNavigate();

   useEffect(() => {
      getCategory(id, {}).then(({ data }) => {
         setData(data.data);
      });
   }, [id]);

   const handleInput = (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
   };

   const handleUpdate = () => {
      updateCategory(id, input, {})
         .then(() => {
            toast.success("Sửa danh mục thành công !");
            navigate("/admin/category");
         })
         .catch((err) => {
            toast.error("Sửa danh mục thất bại !", err);
         });
   };
   return (
      <>
         <div className="card">
            <div className="card-body">
               <h5 className="card-title fw-semibold mb-4">
                  Chỉnh sửa danh mục "{data.name}"
               </h5>
               <div className="card">
                  <div className="card-body">
                     <div className="mb-3">
                        <label className="form-label">Tên danh mục</label>
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
                        onClick={handleUpdate}
                     >
                        Lưu lại
                     </button>
                  </div>
               </div>
               <Link to="/admin/category" className="btn btn-outline-secondary">
                  Quay lại
               </Link>
            </div>
         </div>
      </>
   );
};

export default CategoryDetailPage;

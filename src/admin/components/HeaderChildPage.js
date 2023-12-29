import React, { useEffect, useState } from "react";
import exportExcel from "../../helper/exportExcel";

const HeaderChildPage = ({
   title,
   placeholder,
   showModal,
   apiSearch,
   setData,
   data,
   fileName,
}) => {
   const [searchString, setSearchString] = useState("");

   useEffect(() => {
      document.title = title;
   }, [title]);

   const searchHandle = () => {
      apiSearch({
         params: {
            q: searchString,
         },
      }).then(({ data }) => setData(data.data));
   };

   return (
      <div className="card w-100">
         <div className="card-body p-4">
            <div className="row">
               <div className="col-lg-2">
                  <h5 className="card-title fw-semibold mb-4 d-inline mr-2">
                     {title}
                  </h5>
               </div>
               <div className="col-lg-6">
                  <div className="input-group">
                     <input
                        type="text"
                        className="form-control my-1"
                        placeholder={placeholder}
                        aria-describedby="search"
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                     />
                     <button
                        className="btn btn-success my-1"
                        type="button"
                        id="search"
                        onClick={searchHandle}
                     >
                        Tìm kiếm
                     </button>
                  </div>
               </div>
               <div className="col-lg-4 d-flex justify-content-end">
                  <button
                     type="button"
                     className="btn btn-primary m-1 "
                     onClick={() => showModal(true)}
                  >
                     Thêm mới
                  </button>
                  <button
                     type="button"
                     className="btn btn-secondary m-1"
                     onClick={() => exportExcel(data, fileName)}
                  >
                     Xuất excel
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeaderChildPage;

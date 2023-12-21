import React, { useEffect, useState } from "react";

const TitlePage = ({ title, placeholder }) => {
   const [searchString, setSearchString] = useState("");

   const searchHandle = () => {
      console.log(searchString);
   };

   useEffect(() => {
      document.title = title;
   }, []);

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
                  <button type="button" className="btn btn-primary m-1 ">
                     Thêm mới
                  </button>
                  <button type="button" className="btn btn-secondary m-1">
                     Xuất excel
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TitlePage;

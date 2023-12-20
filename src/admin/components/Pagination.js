import React from "react";

const Pagination = () => {
   return (
      <div className="d-flex justify-content-end">
         <nav aria-label="Page navigation">
            <ul className="pagination shadow-sm">
               <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                     <span aria-hidden="true">«</span>
                  </a>
               </li>
               <li className="page-item">
                  <a className="page-link" href="#">
                     1
                  </a>
               </li>
               <li className="page-item">
                  <a className="page-link active" href="#">
                     2
                  </a>
               </li>
               <li className="page-item">
                  <a className="page-link" href="#">
                     3
                  </a>
               </li>
               <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                     <span aria-hidden="true">»</span>
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Pagination;

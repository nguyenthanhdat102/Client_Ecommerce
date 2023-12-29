import React from "react";
import { Link, useLocation } from "react-router-dom";

const Pagination = ({ pages, currentPage = 1, totalPage = 1 }) => {
   const location = useLocation();
   const formatUrl = (page) => {
      if (page < 1) {
         page = 1;
      }
      if (page > totalPage) {
         page = totalPage;
      }
      return `${location.pathname}?page=${page}`;
   };
   return (
      <div className="d-flex justify-content-end">
         <nav aria-label="Page navigation">
            <ul className="pagination shadow-sm">
               {currentPage > 1 && (
                  <li className="page-item">
                     <Link
                        className="page-link"
                        to={formatUrl(currentPage - 1)}
                        aria-label="Previous"
                     >
                        <span aria-hidden="true">«</span>
                     </Link>
                  </li>
               )}

               {pages &&
                  pages.map((page, index) => {
                     return (
                        <li
                           key={page}
                           className={`page-item ${
                              page === currentPage && "active"
                           }`}
                        >
                           {page === "..." ? (
                              <span className="page-link">{page}</span>
                           ) : (
                              <Link className="page-link" to={formatUrl(page)}>
                                 {page}
                              </Link>
                           )}
                        </li>
                     );
                  })}

               {currentPage < totalPage && (
                  <li className="page-item">
                     <Link
                        className="page-link"
                        to={formatUrl(currentPage + 1)}
                        aria-label="Previous"
                     >
                        <span aria-hidden="true">»</span>
                     </Link>
                  </li>
               )}
            </ul>
         </nav>
      </div>
   );
};

export default Pagination;

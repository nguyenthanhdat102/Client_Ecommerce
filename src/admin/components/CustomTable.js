import React from "react";

const CustomTable = ({ children, headers }) => {
   return (
      <>
         <div className="card w-100">
            <div className="card-body p-4">
               <div className="table-responsive">
                  <table className="table text-nowrap mb-0 align-middle">
                     <thead className="text-dark fs-4">
                        <tr>
                           {headers.map((item, index) => {
                              return (
                                 <th className="border-bottom-0" key={index}>
                                    <h6 className="fw-semibold mb-0">{item}</h6>
                                 </th>
                              );
                           })}
                           <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Chức năng</h6>
                           </th>
                        </tr>
                     </thead>
                     <tbody>{children}</tbody>
                  </table>
               </div>
            </div>
         </div>
      </>
   );
};

export default CustomTable;

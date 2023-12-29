import React, { useEffect, useState } from "react";
import ExcelJS from "exceljs";

import { getBrands } from "../../../service/api/brandApi";

const SamplePage = () => {
   const [data, setData] = useState([]);
   useEffect(() => {
      getBrands({}).then(({ data }) => setData(data.data.brands));
   }, []);

   console.log(Object.values(data));

   const handleExport = () => {
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet("BrandSheet1");
      // Lấy thuộc tính json làm header
      const headerRow = ws.addRow(Object.keys(data[0]));

      // Thêm data vào các dòng
      data.forEach((data) => {
         const rowValues = Object.values(data);
         ws.addRow(rowValues);
      });
      
      // Tạo file Excel
      wb.xlsx.writeBuffer().then((buffer) => {
         const blob = new Blob([buffer], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
         });
         const url = URL.createObjectURL(blob);

         // Tạo một đường link tạm thời và click để tải xuống
         const link = document.createElement("a");
         link.href = url;
         link.setAttribute("download", "brand.xlsx");
         document.body.appendChild(link);
         link.click();

         // Xóa đường link và giải phóng tài nguyên
         document.body.removeChild(link);
         URL.revokeObjectURL(url);
      });
   };

   return (
      <div className="card">
         <div className="card-body">
            <button
               type="button"
               className="btn btn-success"
               onClick={handleExport}
            >
               tải xuống
            </button>
         </div>
      </div>
   );
};

export default SamplePage;

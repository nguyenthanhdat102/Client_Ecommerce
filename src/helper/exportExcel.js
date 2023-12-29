import ExcelJS from "exceljs";

export default function exportExcel(data, fileName) {
   const wb = new ExcelJS.Workbook();
   const ws = wb.addWorksheet("Sheet 1");
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
      link.setAttribute("download", `${fileName}.xlsx`);
      document.body.appendChild(link);
      link.click();

      // Xóa đường link và giải phóng tài nguyên
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
   });
}

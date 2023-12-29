import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import moment from "moment/moment";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import HeaderChildPage from "../../components/HeaderChildPage";
import Pagination from "../../components/Pagination";
import CustomModal from "../../components/CustomModal";

import {
   getCategories,
   createCategory,
   deleteCategory,
} from "../../../service/api/categoryApi";

import handleInput from "../../../helper/handleInput";
import CustomTable from "../../components/CustomTable";

const CategoryPage = () => {
   const [data, setData] = useState({});
   const [showCreateModal, setShowCreateModal] = useState(false);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [itemSelected, setItemSelected] = useState(null);
   const [input, setInput] = useState({});
   const [searchParams, setSearchParams] = useSearchParams();
   const currentPage = searchParams.get("page") || 1;

   console.log(data);

   const handleGetCategories = () => {
      getCategories({
         params: {
            page: currentPage,
         },
      }).then(({ data }) => {
         setData(data.data);
      });
   };

   useEffect(() => {
      handleGetCategories();
   }, [currentPage]);

   const handleShowCreateModal = (state) => {
      setShowCreateModal(state);
   };

   const handleCreateCategory = () => {
      if (input.brand !== "") {
         createCategory(input, {})
            .then(() => {
               handleGetCategories();
               toast.success("Thêm danh mục thành công !");
               setShowCreateModal(false);
               setInput({});
            })
            .catch((err) => toast.error("Thêm mới thất bại !", err));
      }
   };

   const handleDeleteCategory = () => {
      deleteCategory(itemSelected, {})
         .then(() => {
            handleGetCategories();
            toast.success("Xoá danh mục thành công !");
            setShowDeleteModal(false);
         })
         .catch((err) => toast.error("Xoá thất bại !", err));
   };

   return (
      <>
         <ToastContainer position="bottom-right" autoClose={3000} />

         {/* Modal Create */}
         <CustomModal
            title={"Thêm danh mục"}
            stateModal={showCreateModal}
            setStateModal={setShowCreateModal}
            OkbtnName={"Lưu"}
            CancelBtnName={"Đóng"}
            handleOk={handleCreateCategory}
         >
            <Form.Label htmlFor="name">Tên danh mục</Form.Label>
            <Form.Control
               type="text"
               name="name"
               defaultValue={input?.name || ""}
               autoFocus
               aria-describedby="categoryHelpBlock"
               onChange={(e) => handleInput(e, input, setInput)}
            />
            <Form.Text id="categoryHelpBlock" muted>
               Tên thương hiệu không quá 20 kí tự, không được bỏ trống
            </Form.Text>
         </CustomModal>
         {/* End Modal Create */}

         <HeaderChildPage
            title={"Danh mục"}
            placeholder={"Tìm kiếm tên danh mục"}
            showModal={handleShowCreateModal}
            apiSearch={getCategories}
            setData={setData}
            data={data.categories}
            fileName={"categories"}
         />

         <CustomTable
            headers={["STT", "Tên danh mục", "Tên rút gọn", "Ngày tạo"]}
         >
            {data.total > 0 ? (
               data.categories.map((item, index) => (
                  <tr key={item?._id}>
                     <td className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">{++index}</h6>
                     </td>
                     <td className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">{item?.name}</h6>
                     </td>
                     <td className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">{item?.slug}</h6>
                     </td>
                     <td className="border-bottom-0">
                        <h6 className="fw-semibold mb-0">
                           {moment(item?.updatedAt).fromNow()}
                        </h6>
                     </td>
                     <td className="border-bottom-0">
                        <Link
                           to={`${item?.slug}/${item?._id}`}
                           className="btn btn-warning m-1"
                        >
                           Sửa
                        </Link>
                        <Button
                           variant="danger"
                           className="m-1"
                           onClick={() => {
                              setItemSelected(item._id);
                              setShowDeleteModal(true);
                           }}
                        >
                           Xoá
                        </Button>
                     </td>
                  </tr>
               ))
            ) : (
               <tr>
                  <td className="border-bottom-0" colSpan={5}>
                     <h6 className="fw-semibold mb-0">Không có dữ liệu</h6>
                  </td>
               </tr>
            )}
         </CustomTable>

         {data?.pages && (
            <Pagination
               pages={data.pages}
               currentPage={data.currentPage}
               totalPage={data.totalPage}
            />
         )}

         {/* Modal Delete */}
         <CustomModal
            title={"Xoá thương hiệu"}
            stateModal={showDeleteModal}
            setStateModal={setShowDeleteModal}
            CancelBtnName={"Huỷ"}
            OkbtnName={"Xoá"}
            handleOk={handleDeleteCategory}
         >
            Lưu ý khi xoá danh mục, các sản phẩm liên quan cũng bị xoá theo !
            Không thể hoàn tác, bạn có muốn tiếp tục ?
         </CustomModal>
         {/* End Modal Delete */}
      </>
   );
};

export default CategoryPage;

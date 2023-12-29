import { createBrowserRouter } from "react-router-dom";

//ADMIN
import AdminLayout from "../admin/layout/AdminLayout";
import ErrorPageAdmin from "../admin/page/error/ErrorAdminPage";
import DashBoard from "../admin/page/dashboard/DashBoard";
import ProductPage from "../admin/page/product/ProductPage";
import CategoryPage from "../admin/page/category/CategoryPage";
import BrandPage from "../admin/page/brand/BrandPage";
import ProductCommentPage from "../admin/page/comment/ProductCommentPage";
import VoucherPage from "../admin/page/voucher/VoucherPage";
import OrderPage from "../admin/page/order/OrderPage";
import InvoicePage from "../admin/page/invoice/InvoicePage";
import StatisticalPage from "../admin/page/statistical/StatisticalPage";

//CLIENT
import SiteLayout from "../site/layout/SiteLayout";
import ErrorPageSite from "../site/page/error/ErrorSitePage";
import Home from "../site/page/Home";
import UserPage from "../admin/page/user/UserPage";
import BrandDetailPage from "../admin/page/brand/BrandDetailPage";
import SamplePage from "../admin/page/sample-page/SamplePage";
import CategoryDetailPage from "../admin/page/category/CategoryDetailPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <SiteLayout />,
      children: [
         {
            path: "*",
            element: <ErrorPageSite />,
         },
         {
            index: true,
            element: <Home />,
         },
      ],
   },
   {
      path: "/admin",
      element: <AdminLayout />,
      children: [
         {
            path: "*",
            element: <ErrorPageAdmin />,
         },
         {
            index: true,
            element: <DashBoard />,
         },
         {
            path: "test",
            element: <SamplePage />,
         },
         {
            path: "product",
            element: <ProductPage />,
         },
         {
            path: "category",
            element: <CategoryPage />,
         },
         {
            path: "category/:slug/:id",
            element: <CategoryDetailPage />,
         },
         {
            path: "brand",
            element: <BrandPage />,
         },
         {
            path: "brand/:slug/:id",
            element: <BrandDetailPage />,
         },
         {
            path: "product/comment",
            element: <ProductCommentPage />,
         },
         {
            path: "voucher",
            element: <VoucherPage />,
         },
         {
            path: "order",
            element: <OrderPage />,
         },
         {
            path: "invoice",
            element: <InvoicePage />,
         },
         {
            path: "statistical",
            element: <StatisticalPage />,
         },
         {
            path: "user",
            element: <UserPage />,
         },
      ],
   },
]);

export default router;

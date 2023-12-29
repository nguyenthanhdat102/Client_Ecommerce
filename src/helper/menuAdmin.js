const menu = [
   {
      title: "Thử nghiệm",
      children: [
         {
            title: "Test",
            icon: 'ti ti-brand-redux',
            link: '/admin/test'
         }
      ]
   },
   {
      title: "Bảng điều khiển",
      children: [
         {
            title: "Trang chủ",
            icon: "ti ti-layout-dashboard",
            link: "/admin",
         },
         {
            title: "Thành viên",
            icon: "ti ti-user",
            link: "/admin/user",
         },
      ],
      status: true,
   },
   {
      title: "Quản lí sản phẩm",
      children: [
         {
            title: "Danh mục",
            link: "/admin/category",
            icon: "ti ti-menu-2",
         },
         {
            title: "Thương hiệu",
            link: "/admin/brand",
            icon: "ti ti-brand-redux",
         },
         {
            title: "Sản phẩm",
            link: "/admin/product",
            icon: "ti ti-shirt",
         },
         {
            title: "Phản hồi",
            link: "/admin/product/comment",
            icon: "ti ti-message-circle",
         },
         {
            title: "Khuyến mãi",
            link: "/admin/voucher",
            icon: "ti ti-gift-card",
         },
         {
            title: "Nhập hàng",
            link: "/admin/invoice",
            icon: "ti ti-truck-loading",
         },
         {
            title: "Đơn đặt hàng",
            link: "/admin/order",
            icon: "ti ti-receipt-2",
         },
         {
            title: "Thống kê",
            link: "/admin/statistical",
            icon: "ti ti-chart-line",
         },
      ],
      status: true,
   },
   {
      title: "Bên thứ ba",
      children: [
         {
            title: "Nhà cung cấp",
            link: "/admin/supplier",
            icon: "ti ti-shirt-sport",
         },
         {
            title: "Đơn vị vận chuyển",
            link: "/admin/ship",
            icon: "ti ti-truck-delivery",
         },
      ],
      status: true,
   },
   {
      title: "Quản lí bài viết",
      children: [
         {
            title: "Chủ đề",
            link: "/admin/topic",
            icon: "ti ti-flag",
         },
         {
            title: "Bài viết",
            link: "/admin/post",
            icon: "ti ti-news",
         },
         {
            title: "Bình luận",
            link: "/admin/comment?type=post",
            icon: "ti ti-message-2",
         },
      ],
      status: true,
   },
   {
      title: "Quảng cáo",
      children: [
         {
            title: "Banner",
            link: "/admin/banner",
            icon: "ti ti-rectangle",
         },
      ],
   },
];

export default menu;

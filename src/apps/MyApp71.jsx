import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// path3으로 이동했을 때 어떤 컴포넌트 출력
const router = createBrowserRouter([
  { path: "/", element: <div>여기는 홈페이지</div> },
  {
    path: "/path1",
    element: (
      <div>
        1번 경로
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "", // = index={true}
        element: <div>여기는 경로1의 홈페이지</div>,
      },
      {
        path: "sub1", // 슬래쉬 안붙임
        element: <div>까꿍</div>,
      },
      {
        path: "sub2",
        element: <div>메롱</div>,
      },
    ],
  },
  {
    path: "/path2",
    element: <div>2번 경로</div>,
  },
  {
    path: "/path3",
    element: (
      <div>
        정령섬
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <div>내년 초 배송될지도?</div>,
      },
      {
        path: "sub1",
        element: <p>빅박스 가즈아</p>,
      },
      {
        path: "sub2",
        element: <div>추가정령 더 줘라</div>,
      },
    ],
  },
  {
    path: "/path4",
    element: <div>브라스</div>,
  },
]);

function MyApp71(props) {
  return <RouterProvider router={router} />;
}

export default MyApp71;

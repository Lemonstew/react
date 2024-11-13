import React from 'react';
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <RootPage/>,
  children: [
    {
      index: true, element: <HomeContent/>
    }
    {
      path: "sub1",
      element: <SubContent1/>
    },
    {
      path: "sub2",
      element: <SubContent/>
    }
  ]
}])

function MyApp74(props) {
  return (
    <div></div>
  );
}

export default MyApp74;
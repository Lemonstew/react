import React, { useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Box, Flex, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <div>HOME</div> }],
  },
  { path: "view/:customerId", element: <CustomerView /> },
]);

function CustomerView() {
  const params = useParams();
  return <Box>{params.customerId}번 고객 정보</Box>;
}

function RootLayout() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  return (
    <Box>
      <Flex>
        <Box onClick={() => navigate("/")}>HOME</Box>
        <Box>
          <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          <Button onClick={() => navigate(`/view/${keyword}`)}>
            search customer
          </Button>
        </Box>
      </Flex>
      <hr />
      <Outlet />
    </Box>
  );
}

function MyApp77(props) {
  return <RouterProvider router={router} />;
}

export default MyApp77;

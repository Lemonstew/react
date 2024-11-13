import React from "react";
import {
  createBrowserRouter,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyHome() {
  const navigate = useNavigate();
  const locatioon = useLocation();
  const [params] = useSearchParams();

  console.log("location", location.search);
  console.log("params", params);
  console.log("params", params.toString());
  return (
    <Box>
      <Button onClick={() => navigate("/?page=1")}>1</Button>
      <Button onClick={() => navigate("/?page=2")}>2 </Button>
      <Button onClick={() => navigate("/?page=3")}>3</Button>
    </Box>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyHome />,
  },
]);

function MyApp75(props) {
  return <div></div>;
}

export default MyApp75;

import React from "react";
import { toaster } from "../components/ui/toaster.jsx";
import { Button } from "../components/ui/button.jsx";

function MyApp34(props) {
  return (
    <div>
      <Button
        onClick={() => {
          toaster.create({ description: "Anachrony", type: "success" });
        }}
      ></Button>
      <Button
        onClick={() => {
          toaster.create({ description: "Dune", type: "error" });
        }}
      ></Button>
      <Button
        onClick={() => {
          toaster.create({ description: "Spirit Island", type: "info" });
        }}
      ></Button>
      <Button
        onClick={() => {
          toaster.create({ description: "kinfire chronicle", type: "warning" });
        }}
      ></Button>
      <hr />
      <Button
        onClick={() => {
          toaster.create({
            description: "아르낙",
          });
        }}
      ></Button>
    </div>
  );
}

export default MyApp34;

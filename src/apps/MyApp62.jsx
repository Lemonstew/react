import React from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub1", { name: "son", age: 99 });
        }}
      ></Button>
    </div>
  );
}

export default MyApp62;

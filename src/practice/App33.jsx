import React from "react";
import { Button, Input, Textarea } from "@chakra-ui/react";

function App33(props) {
  return (
    <div>
      <Input />
      <hr />
      <Button
        onClick={function () {
          console.log();
        }}
      >
        click
      </Button>
      <hr />
      <Textarea />
    </div>
  );
}

export default App33;

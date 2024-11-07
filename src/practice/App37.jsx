import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";

function App37(props) {
  const [text, setText] = useState("");
  function handleClick1(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <Input onKeyUp={handleClick1} />
      <Box>text : {text}</Box>
    </div>
  );
}

export default App37;

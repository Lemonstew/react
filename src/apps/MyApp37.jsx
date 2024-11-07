import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function MyApp37(props) {
  const [number, setNumber] = useState(0);
  function handleClick1() {
    setNumber(number + 1);
  }
  function handleClick2() {
    setNumber(number - 1);
  }
  function handleClick3() {
    setNumber(0);
  }
  function handleClick4() {
    setNumber(number * 2);
    console.log("*2");
  }
  return (
    <div>
      <Button onClick={handleClick1}>value increase</Button>
      <Button onClick={handleClick2}>value decrease</Button>
      <Button onClick={handleClick3}>value reset</Button>
      <Button onClick={handleClick4}>value * 2</Button>
      <Box>number : {number}</Box>
    </div>
  );
}

export default MyApp37;

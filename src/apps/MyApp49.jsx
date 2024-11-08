import React, { useState } from "react";
import { Box, createContext, Input } from "@chakra-ui/react";

function Comp2({ message }) {
  return <Box>{message}</Box>;
}

function Comp1({ message }) {
  <Box>
    <Comp2 message={message} />
  </Box>;
}

// step1 : Context 만들기
const MessageContext = createContext();
// step2 : context 사용하기

function MyApp49(props) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <Input onChange={(e) => setMessage(e.target.value)} />
      <Comp1 message={message} />
    </div>
  );
}

export default MyApp49;

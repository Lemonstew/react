import React from "react";
import { Box, HStack } from "@chakra-ui/react";

function App34(props) {
  function fun1(e) {
    console.log(e.target.innerText);
  }
  return (
    <div>
      <HStack h={20}>
        <Box h={20} onClick={fun1} bg={"orange"}>
          The Lost Ruins of Arnak
        </Box>
        <Box h={20} onClick={fun1} bg={"blue"}>
          Dune: Imperium
        </Box>
        <Box h={20} onClick={fun1} bg={"teal"}>
          Anachrony: Infinity Box
        </Box>
      </HStack>
    </div>
  );
}

export default App34;

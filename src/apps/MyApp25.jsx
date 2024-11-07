import React from "react";
import { Button } from "@chakra-ui/react";

function MyApp25(props) {
  return (
    <div>
      <Button colorPalette="blue">클릭</Button>
      <Button colorPalette="teal">클릭</Button>
      <Button colorPalette="red">클릭</Button>
      <Button colorPalette="pink">클릭</Button>
      <Button colorPalette="purple">클릭</Button>

      <Button colorPalette="purple" variant="outline">
        클릭
      </Button>
      <Button colorPalette="purple" variant="surface">
        클릭
      </Button>
      <Button colorPalette="purple" variant="subtle">
        클릭
      </Button>
      <Button colorPalette="purple" variant="outline">
        클릭
      </Button>
    </div>
  );
}

export default MyApp25;

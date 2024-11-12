import React, { useState } from "react";
import axios from "axios";
import { Field } from "../components/ui/field.jsx";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function App66(props) {
  const [supplierId, setSupplierId] = useState(0);
  const [supplier, setSupplier] = useState(null);
  const handleButtonClick = () => {
    axios.get("/api/main6/sub2").then((e) => e.data);
  };
  return (
    <div>
      <Field label={"공급 번호"}>
        <NumberInputRoot
          value={supplierId}
          onValueChange={(e) => setSupplierId(e.value)}
        >
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleButtonClick}>공급 번호 조회</Button>
      <hr />
      <SupplierView supplier={supplier} />
    </div>
  );
}
function SupplierView() {
  if (!supplier) {
    return (
      <Box>
        <p>조회된 공급 정보가 없습니다.</p>
      </Box>
    );
  } else {
    return (
      <Box>
        <Field></Field>
      </Box>
    );
  }
}

export default App66;

import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function MyApp47(props) {
  return (
    <div>
      <Field label={"introduce"}>
        <Input onChange={(e) => setText(e.target.value)} />
      </Field>
      <Comp text={text} />
      <Comp2 message={text} />
      <Comp3 message={text} />
    </div>
  );
}

function Comp() {}

function Comp2() {}

function Comp3() {}
function Comp4({ message }) {
  return (
    <Box>
      <h3>comp4</h3>
    </Box>
  );
}
export default MyApp47;

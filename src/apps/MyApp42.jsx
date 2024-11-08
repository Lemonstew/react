import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function MyApp42(props) {
  const [person, setPerson] = useState({ name: "hong", address: "seoul" });
  return (
    <div>
      <Field label={"name"}>
        <Input
          onKeyUp={(e) => setPerson({ ...person, name: e.target.value })}
        />
        value={person.name}
      </Field>
      <Field label={"address"}>{/*<Input onKeyUp={(e) => }/>*/}</Field>
    </div>
  );
}

export default MyApp42;

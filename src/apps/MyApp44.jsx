import React from "react";
import { useImmer } from "use-immer";
import { Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

const originPerson = {
  name: "hong",
  info: {
    email: "gmail",
    address: "seoul",
    description: "introduce myself",
  },
};
function MyApp44(props) {
  const [person, updatePerson] = useImmer();
  return (
    <div>
      <Field label={"이름"}>
        <Input
          onChange={(e) => {
            updatePerson((prevState) => {
              prevState.name = e.target.value;
            });
          }}
          value={person.name}
        />
      </Field>
      <Field label={"주소"}>
        <Input
          onChange={() => {
            updatePerson((prevState) => {
              prevState.info.address = e.target.value;
            });
          }}
          value={person.info.address}
        />
      </Field>
      <Field label={"이메일"}>
        <Input onChange={() => {}} value={person.info.email} />
      </Field>
      <Field label={"자기소개"}>
        <Input onChange={() => {}} value={person.info.description} />
      </Field>
    </div>
  );
}

export default MyApp44;

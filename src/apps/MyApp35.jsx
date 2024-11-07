import React from "react";
import { Button } from "../components/ui/button.jsx";
import { Input } from "@chakra-ui/react";

function MyApp35(props) {
  function fun1(e) {
    console.log("button clicked");
    console.log(e.target);
  }
  function fun2(e) {
    console.log("keyup event");
    console.log(e.target.value);
  }
  return (
    <div>
      <Input onKeyUp={fun2} />
      <Input onKeyUp={fun2} />
      <Input onKeyUp={fun2} />
      <hr />
      <Button onClick={fun1}>button1</Button>
      <Button onClick={fun1}>button2</Button>
      <Button onClick={fun1}>button3</Button>
    </div>
  );
}

export default MyApp35;

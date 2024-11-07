import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function MyApp36(props) {
  // 상태(state)가 변경되면 컴포넌트를 다시 화면에 그림 (re render)

  // useState : 초기 상태를 결정하고
  //            상태를 저장한 변수와, 상태를 변경하는 함수를 리턴함
  // const a = useState();
  // a[0]; // 상태를 저장한 변수
  // a[1]; // 상태를 변경하는 변수
  //
  // const [n1, n2] = a;
  const [message, setMessage] = useState("first statement");
  // 관습: ㅁ, setㅁ
  // const [dune, setDune] = useState()

  let text = "hello";

  function fun1() {
    text = "hi";
  }
  function fun2() {
    message = "hey"; // 상태를 직접 변경하면 안됨
  }

  function fun3() {
    // set... 메소드로 상태를 변경해야 함
    setMessage("셋함수를 이용한 상태 변경");
  }

  return (
    <div>
      <Button>click</Button>
      <Box w={20} h={20} bg={"blue"} color={"white"}>
        {text}
      </Box>
    </div>
  );
}

export default MyApp36;

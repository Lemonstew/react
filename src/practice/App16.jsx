import React from "react";

function App16(props) {
  return (
    <div>
      <MyCom address={"ny"} city={"seoul"} score={"9.88"} />
      <MyCom address={"ca"} city={"busan"} score={"8.99"} />
    </div>
  );
}

function MyCom(a) {
  console.log(a);
}

export default App16;
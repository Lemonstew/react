import React from "react";

function MyApp19(props) {
  return (
    <div>
      <Comp address={"seoul"} city={"gangnam"} />
      <Comp address={"ny"} />
      <Comp city={"shinchon"} />
    </div>
  );
}

// undefined 와 기본값

// function Comp({address, city}) {
//   return (
//
//   )
// }

export default MyApp19;

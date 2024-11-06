import React from "react";

function MyApp18(props) {
  return (
    <div>
      <Comp1 address="seoul" score={9.88} />
    </div>
  );
}

function Comp1(props) {
  return (
    <div>
      <h3>주소: {props.address}</h3>
      <h3>점수: {props.score}</h3>
    </div>
  );
}

export default MyApp18;

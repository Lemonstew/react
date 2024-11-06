import React from "react";

function MyApp20(props) {
  const obj = {
    title: "채식주의자",
    price: 5000,
  };
  return (
    <div>
      <Comp title={obj.title} price={obj.price} />
    </div>
  );
}

function Comp(props) {
  return (
    <div>
      <h3>CoMp</h3>
      <li>{props.title}</li>
      <li>{props.price}</li>
    </div>
  );
}

export default MyApp20;

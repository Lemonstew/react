import React from "react";

function MyCom(props) {
  props.fun1();
  return (
    <div>
      <h3>주소 : {props.address}</h3>
      <h3>나이 : {props.age}</h3>
      <input type="text" readOnly={props.readonly} value={"hi"} />
      <ul>
        {props.list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <hr />
      <h3>상품명 : {props.product.name}</h3>
      <h3>가격 : {props.product.price}원</h3>
    </div>
  );
}

function App17(props) {
  return (
    <div>
      <MyCom
        fun1={() => {
          console.log("hi");
        }}
        address="seoul"
        age={32}
        readonly={true}
        list={["cellphone", "book", "knife", "gun"]}
        product={{ name: "Bomb", price: 800000000 }}
      />
    </div>
  );
}
export default App17;

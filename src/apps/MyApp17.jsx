import React from "react";

function MyApp17(props) {
  return (
    <div>
      <Comp
        name="hello"
        age={3.14}
        foods={["pizza", "burger"]}
        book={{ title: "소년이 온다", author: "한강" }}
        info={function () {
          console.log("프랍으로 넘긴 함수");
        }}
        desc={() => {
          console.log("프랍으로 넘긴 애로우 펑션");
        }}
        elem={<Comp2 />}
      />
    </div>
  );
}

function Comp2() {
  return null;
}

function Comp(props) {
  console.log(props.name);
  console.log(props.age);
  console.log(props.foods);
  console.log(props.book);
  console.log(props.info);
  console.log(props.desc);
  console.log(props.elem);
}

export default MyApp17;

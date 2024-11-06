import React from "react";

function App10(props) {
  const a = [
    { name: "son", age: 30 },
    { name: "rose", age: 10 },
    { name: "faker", age: 40 },
    { name: "hankang", age: 50 },
    { name: "lee", age: 20 },
    { name: "kim", age: 70 },
  ];

  const b = a.filter((e) => {
    return e.age >= 30;
  });

  // boolean 값은 전체를 중괄호로 묶는다

  const c = b.map((e) => e.name);
  // 30세 이상인 사람의 이름만 출력
  /*
  <h1>son</h1>
  <h1>faker</h1>
  <h1>hankang</h1>
  <h1>kim</h1>
   */
  return <div>{c}</div>;
}
export default App10;

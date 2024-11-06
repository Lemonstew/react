import React from "react";

function Comp1() {
  return null;
}

const a = "Arnak";
const b = "Dune";

function MyApp13(props) {
  return (
    <div>
      <Comp1 />
    </div>
  );
}
// export { a };
// export { b };
export { Comp1 };
// 이렇게 하면 어떤 값도 내보낼 수 있음
export { a, b }; // named export
// 파일 내에 여러 개 존재 가능

export default MyApp13;

// default export (unnamed)
// 파일 내에 하나만 존재함
// 어떤 이름으로든 받기 가능
// 바로 값을 기입해도 됨.

// 이름을 바꿔서 쓸 수 있다.
// 서로 다른 파일에서 이름이 겹칠 경우,
// as를 앞에 붙여서 바꾼다
// 예시 : f as fa / f as fb

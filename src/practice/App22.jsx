import React from "react";

function App22(props) {
  return (
    <div>
      <Comp1>
        <h3>Lorem ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          asperiores aspernatur beatae in iusto magni nobis, obcaecati optio
          quam sequi sit tempora, ut veritatis voluptatibus voluptatum!
          Accusamus deleniti molestias repudiandae!
        </p>
      </Comp1>
      <hr />
      <Comp2></Comp2>
    </div>
  );
}
// Comp1 만들기 App22에서 넘겨준 children 두번 출력하기

function Comp1() {}

export default App22;

import React from "react";

function MyApp33(props) {
  function fun1() {
    console.log("clicked");
  }
  const fun2 = function () {
    console.log("fun2 function");
  };
  const fun3 = function () {
    console.log("fun3 function");
  };

  return (
    <div>
      <button onClick={fun3}>[chakra ui] button</button>
      <button onClick={fun2}>another button</button>
      <button onClick={fun1}>other button</button>
      <button onClick={fun1}>버튼1</button>
      <button
        onClick={function () {
          console.log("second button clicked");
        }}
      >
        {" "}
        button 2{" "}
      </button>
      {/*<button onClick={}></button>*/}
    </div>
  );
}

export default MyApp33;

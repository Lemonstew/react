import React from "react";

function App24(props) {
  return (
    <div>
      <MyButton color="black">click</MyButton>
      <hr />
      <MyButton color="yellow">click again</MyButton>
    </div>
  );
}

function MyButton({ color, children }) {
  return (
    <div>
      <button
        style={{
          backgroundColor: color,
        }}
      >
        {children}
      </button>
    </div>
  );
}

export default App24;

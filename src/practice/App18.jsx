import React from "react";

function App18(props) {
  return (
    <div>
      <Comp
        product={{ name: "Anachrony", price: 150000 }}
        title="Time paradox"
        content="post apochalyps"
        author="David"
      />
    </div>
  );
}

function Comp({ product, title, content, author }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <h1>{product}</h1>
      <h1>{title}</h1>
      <h1>{content}</h1>
      <h1>{author}</h1>
    </div>
  );
}

export default App18;

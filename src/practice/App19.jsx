import React from "react";

function App19(props) {
  return (
    <div>
      <MyComp title={"채식주의자"} content={"비건"} author={"한강"} />
      <MyComp title={"채식주의자"} content={"비건"} />
      <MyComp title={"채식주의자"} content={"비건"} />
      <MyComp content={"비건"} author={"한강"} />
    </div>
  );
}

function MyComp({
  title = "Anachrony",
  content = "time paradox",
  author = "David",
}) {
  return (
    <div>
      <li>{title}</li>
      <li>{content}</li>
      <li>{author}</li>
    </div>
  );
}

export default App19;

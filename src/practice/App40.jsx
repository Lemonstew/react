import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

function App40(props) {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  function handleNumAdd() {
    const nextNum = [...numbers, numbers[numbers.length - 1] + 1];
    setNumbers(nextNum);
  }
  function handleNumDel() {
    numbers.pop();
    setNumbers(numbers);
  }
  return (
    <div>
      <Button onClick={handleNumAdd}>add</Button>
      <Button onClick={handleNumDel}>delete</Button>
      <ul>
        {numbers.map((a) => (
          <li>{a}</li>
        ))}
      </ul>
    </div>
  );
}

export default App40;

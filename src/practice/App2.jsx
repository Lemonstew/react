function MyComp() {
  return (
    <div>
      <h1>First Component</h1>
      <h1>Second Component</h1>
    </div>
  );
}

function App2() {
  return (
    <div>
      <MyComp />
      <MyComp />
    </div>
  );
}

export default App2;

import "./styles.css";

export default function App() {
  let b = [...Array(5).keys()].map((i) => i + 1);
  console.log(b);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

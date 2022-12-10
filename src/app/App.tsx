import { useEffect, useState } from "react";
import logo from "../logo.svg";
import "./App.css";
import Counter from "./Counter";
import { sum } from "./services/sum";

function App() {
  const [sumResult, setSumResult] = useState<number>(0);

  useEffect(() => {
    const res = sum(1, 2);
    setSumResult(res);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Miova ary == {sumResult}</p>
        <p>Kaiza</p>
      </header>
      <Counter />
    </div>
  );
}

export default App;

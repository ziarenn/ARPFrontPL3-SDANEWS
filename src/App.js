import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/Counter/Counter";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Navbar counter={counter} setCounter={setCounter} />
      <Counter counter={counter} />
      <span>Counter z komponentu niżej: {counter}</span>
    </div>
  );
}

export default App;

// W Navbar.js dodaj Button który będzie aktualizował stan counter w App.js i wyświetlaj ten counter w Navbar.js w spanie

// Przekaż stan counter z App.js do Counter.js i tam go wyświetl

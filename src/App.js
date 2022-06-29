import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/Counter/Counter";

function App() {
  const starterCounter = 5;
  const [counter, setCounter] = useState();

  return (
    <div className="App">
      <Navbar />
      <Counter starterCounter={starterCounter}  setCounter={setCounter}/>
      <span>Counter z komponentu niżej: {counter}</span>
    </div>
  );
}

export default App;

// starterCounter={starterCounter} name="Ania"
// {starterCounter: starterCounter, name: 'Ania'}

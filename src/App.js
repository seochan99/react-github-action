import { useState } from "react";
import "./App.css";

function App() {
  
  const [number, setNumber] = useState(0);
  const [disabled, setDisabled] = useState(false);
  
  const plus = () => setNumber(number+1);
  const minus = () => setNumber(number-1);


  return (
    <div className="App">
      <header className="App-header">

        <h3 data-testid="countNum">{number}</h3>
        
        <button
          data-testid="minusBtn"
          onClick={minus}
          disabled={disabled}
        >
          -
        </button>

        <button
          data-testid="plusBtn"
          onClick={plus}
          disabled={disabled}
        >
          +
        </button>

        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testid="onOffBtn"
            onClick={() => setDisabled(prev => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
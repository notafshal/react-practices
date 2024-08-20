import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const increaseOne = () => {
    setCounter(counter + 1);
  };
  const decreaseOne = () => {
    setCounter(counter - 1);
  };
  const resetBtn = () => {
    setCounter(0);
  };
  const handleleft = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };
    setClicks(newClicks);
  };
  const handleright = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };
  const handlingleft = () => {
    setLeft(left + 1);
    setAllClicks(allClicks.concat("L"));
  };
  const handlingright = () => {
    setRight(right + 1);
    setAllClicks(allClicks.concat("R"));
  };
  const History = (props) => {
    if (props.allClicks.length === 0) {
      return <div>This app is used but clicking buttons</div>;
    }
    return <div>{props.allClicks.concat("")}</div>;
  };
  return (
    <>
      <div className="container">
        <h2>Conditional Rendering</h2>
        {left}
        <button onClick={handlingleft}>left</button>
        <button onClick={handlingright}>right</button>
        {right}
        <p>
          <History allClicks={allClicks} />
        </p>
      </div>
      <div className="container">
        <h2>Complex State</h2>
        <button onClick={handleleft}>left</button>
        {clicks.left}

        {clicks.right}
        <button onClick={handleright}>right</button>
      </div>

      <div className="container">
        <div>
          <h2>Counter App</h2>
        </div>
        <div>
          <button onClick={decreaseOne}>-</button>
          {counter}
          <button onClick={increaseOne}>+</button>
          <div>
            <button onClick={resetBtn}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

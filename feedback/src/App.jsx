import { useState } from "react";

import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodRating = () => {
    setGood(good + 1);
  };
  const neutralRating = () => {
    setNeutral(neutral + 1);
  };
  const badRating = () => {
    setBad(bad + 1);
  };
  const total = good + bad + neutral;

  const Stats = (props) => {
    if (props.total === 0) {
      return <> No feedback given yet</>;
    } else {
      return (
        <>
          <div>
            <label>Good </label>
            {(props.good / props.total) * 100} %
          </div>
          <div>
            <label>Neutral </label>
            {(props.neutral / props.total) * 100} %
          </div>
          <div>
            <label>Bad </label>
            {(props.bad / props.total) * 100} %
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div className="container">
        <h2>Rating App</h2>
        <Stats good={good} bad={bad} neutral={neutral} total={total} />
        <h3>
          Good {good}
          {total.good}
          <button onClick={goodRating}>Rate Good</button>
        </h3>
        <h3>
          Neutral {neutral}{" "}
          <button onClick={neutralRating}>Rate Neutral</button>
        </h3>
        <h3>
          Bad {bad} <button onClick={badRating}>Rate Bad</button>
        </h3>
      </div>
    </>
  );
}

export default App;

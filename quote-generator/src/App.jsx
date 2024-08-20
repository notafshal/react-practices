import { useState } from "react";
import "./App.css";

function App() {
  const quotes = [
    "Just one small positive thought in the morning can change your whole day.",
    "Opportunities don't happen, you create them.",
    "It is never too late to be what you might have been",
  ];
  const [change, setChange] = useState(0);
  const [voting, setVoting] = useState([0, 0, 0]);

  const handelChange = () => {
    if (change === quotes.length - 1) {
      setChange(0);
    } else {
      setChange(change + 1);
    }
    console.log(change);
  };
  const handleVote = () => {
    const copy = [...voting];
    copy[change] += 1;
    setVoting(copy);
  };
  const highestVote = Math.max(...voting);
  const highest = voting.indexOf(highestVote);

  return (
    <>
      <div>
        <h2>Quote of the day</h2>
        {quotes[highest]}
      </div>
      {quotes[change]}
      <br />
      {voting[change]}
      <button onClick={handelChange}> Change</button>
      <button onClick={handleVote}>Vote</button>
    </>
  );
}

export default App;

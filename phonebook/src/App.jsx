import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState([]);
  const [number, setNumber] = useState([]);
  const [error, setError] = useState("");
  const [newName, setNewName] = useState("");
  const [searchError, setSearchError] = useState("");
  const [searchNumber, setSearchNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelNumber = (e) => {
    setNumber(e.target.value);
  };
  const Add = (e) => {
    e.preventDefault();
    setError("");
    const checkNumber = localStorage.getItem(name);

    if (checkNumber === number) {
      setError("Number already exists");
      return;
    }
    if (number.length < 10) {
      setError("Number should be atleast 10 character");
      return;
    }
    if (name && number) {
      alert(`${name} and ${number} saved!!!`);
      localStorage.setItem(name, number);
    } else {
      setError(`name and number missing!!!`);
    }
    setName("");
    setNumber("");
  };
  const checkName = (e) => {
    setNewName(e.target.value);
  };
  const check = (e) => {
    e.preventDefault();
    setSearchError("");
    const getData = localStorage.getItem(newName);

    if (getData) {
      setSearchName(newName);
      setSearchNumber(getData);
    } else {
      setSearchError("Name Not found!!");
    }
    setNewName("");
  };
  return (
    <>
      <div className="container">
        <p className="error">{searchError}</p>
        <form onSubmit={check}>
          <input
            type="text"
            value={newName}
            onChange={checkName}
            placeholder="Name"
          ></input>
          <button type="submit">Check</button>
        </form>
        <div className="gap">
          <span> {searchName}</span>
          <span> {searchNumber}</span>
        </div>
      </div>
      <div className="container">
        <p className="error">{error}</p>
        <form onSubmit={Add}>
          <input
            type="text"
            value={name}
            onChange={handelName}
            placeholder="Name"
          />
          <br />
          <input
            type="number"
            value={number}
            onChange={handelNumber}
            placeholder="Number"
          />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default App;

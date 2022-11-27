import { useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [rcvChildData, setChildData] = useState("");

  return (
    <>
      <h1>Import data from child component to Parent Component</h1>
      <ChildComponent transferData={(childData) => setChildData(childData)} />

      <p> Child data received in Parent: {rcvChildData}</p>
    </>
  );
}

export default App;

//Input of the transferData function in child component is the output of the transferData function in parent component

//In parent component:
// 1) set a transferData function on child
// 2) callback childData and set as you need

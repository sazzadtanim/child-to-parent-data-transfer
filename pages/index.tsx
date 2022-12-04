import ChildComponent from "../components/ChildComponent"
import { useState } from "react";

export default function Home() {
  const [rcvChildData, setChildData] = useState("");
  return (
    <>
      <h1>Import data from child component to Parent Component</h1>
      <ChildComponent transferData={(childData:string) => setChildData(childData)} />

      <p> Child data received in Parent: {rcvChildData}</p>
    </>
  );
}


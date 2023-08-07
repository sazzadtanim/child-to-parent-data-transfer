import { useState } from "react";
import ChildComponent from "../components/ChildComponent";

export default function Home() {
  const [rcvChildData, setChildData] = useState("");
  return (
    <div className="prose">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Import data from child component to Parent Component</h1>
      <ChildComponent
        transferData={(childData: string) => setChildData(childData)}
      />

      <p> Child data received in Parent: {rcvChildData}</p>
    </div>
  );
}


import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppHeading from "./assets/components/appHeading";
import Items from "./assets/components/items";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InputBox from "./assets/components/inputBox";

let itemsData = [
  { name: "Buy Milk", date: "03/12/23" },
  {
    name: "Go To College",
    date: "04/04/24"
  }
];

function App() {
  return (
    <>
      <center>
        <AppHeading></AppHeading>

        <div className="main">
          <InputBox></InputBox>
          <Items itemsData={itemsData}></Items>
          </div>
        </center>
    </>
  );
}

export default App;

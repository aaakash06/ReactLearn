import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppHeading from "./assets/components/appHeading";
import Items from "./assets/components/items";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InputBox from "./assets/components/inputBox";



function App() {

let [errorState, setErrorState]   = useState(false)

function error()
 {
setErrorState(true)
 }

  let itemsDatas = [
    { name: "Buy Milk", date: "03/12/23" },
    {
      name: "Go To College",
      date: "04/04/24",
    }
  ];

let [listItems, setListItems]= useState(itemsDatas);

let onAdd =(newName, newDate)=>{


let newTask = {  name: newName , date: newDate}

  let newList = [...listItems, newTask]
  setErrorState(false)

setListItems(newList);

}

function onDeleteFunc(itemName){
let newList= listItems.filter(el => el.name!==itemName )
console.log(newList)
setErrorState(false)
setListItems(newList)
}


  return (
    <>
      <center>
        <AppHeading></AppHeading>

        <InputBox   error ={error}  onAdd = {onAdd}></InputBox>
        <Items   itemsData={listItems} func = {onDeleteFunc}></Items>
      </center>
      <center>
{errorState == true && <h2> There seems to be an error</h2> }

      </center>
    </>
  );
}

export default App;

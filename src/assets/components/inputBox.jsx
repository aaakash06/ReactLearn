import { ContextApi } from "../store/context";
import styles from "./inputBox";
import { useState,useContext } from "react";


function InputBox({ error }) {
  let onAdd = useContext(ContextApi).onAdd;


  let [nameVal, setNameVal] = useState("");
  let [dateVal, setDateVal] = useState("");

  function onNameChange(newName) {
    setNameVal(newName);
  }

  function onDateChange(newDate) {
    setDateVal(newDate);
  }
  return (
    <div className="inputBox container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter a task"
            onChange={(e) => {
              onNameChange(e.target.value);
            }}
            value={nameVal}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={(e) => {
              onDateChange(e.target.value);
            }}
            value={dateVal}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {


if(nameVal && dateVal){
  onAdd(nameVal, dateVal);
            
setNameVal('');
setDateVal('');

}
else
{
error();
}
              


            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default InputBox;

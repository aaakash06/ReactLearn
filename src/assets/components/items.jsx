import Item from "./item";
import styles from "./items.module.css";

import { ContextApi } from "../store/context";
import { useContext } from "react";

function Items() {
  // let contextDataObject = useContext(contextApi)

let listItems = useContext(ContextApi).listItems;

  return (
    <div className="container text-center">
      {listItems.map((item, index) => (
        <Item key={index} itemData={item} ></Item>
      ))}
    </div>
  );
}
export default Items;

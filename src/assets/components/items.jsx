import Item from "./item";
import styles from './items.module.css'
function Items({ itemsData }) {

return(

<div className="container text-center">
{
itemsData.map((item,index)=>(

<Item key={index} itemData={item}></Item>

)
)
}

</div>


);

 
}
export default Items;

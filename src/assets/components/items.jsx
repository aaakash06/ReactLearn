import Item from "./item";
import styles from './items.module.css'
function Items({itemsData,func}) {

return(

<div className="container text-center">
{
itemsData.map((item,index)=>(

<Item key={index} itemData={item} onDeleteFunc={func} ></Item>

)
)
}

</div>


);

 
}
export default Items;

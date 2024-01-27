import Items from "./items";
function Item({ itemData , onDeleteFunc}) {
  return (
    <div className="row">
      <div className="col-6">{itemData.name}</div>
      <div className="col-4">{itemData.date}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger"
        onClick={
()=>{


onDeleteFunc(itemData.name);

}

        }
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Item;

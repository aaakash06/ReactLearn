import Items from "./items";
function Item({ itemData }) {
  return (
    <div className="row">
      <div className="col-4">{itemData.name}</div>
      <div className="col-3">{itemData.date}</div>
      <div className="col-3">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default Item;
function Items({ itemsData }) {
  return (
    <>
      <div className=" container text-center">
        <div className="row">
          <div className="col-4">Go School</div>
          <div className="col-3">12/23/24</div>
          <div className="col-3">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-4">Buy Milk</div>
          <div className="col-3">02/13/23</div>
          <div className="col-3">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Items;

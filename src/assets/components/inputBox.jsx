import styles from "./inputBox";

function InputBox() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Enter a task" />{" "}
        </div>
        <div className="col-3">
          <input type="date" />
        </div>
        <div className="col-3">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default InputBox;

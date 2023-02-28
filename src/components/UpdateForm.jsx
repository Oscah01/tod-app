/* eslint-disable react/prop-types */
const UpdateForm = ({
  updateData, updateTask, changeTask, cancelUpdate,
}) => (
  <>
    <div className="row">
      <div className="col">
        <input
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
          className="form-control form-control-lg"
        />

      </div>
      <div className="col-auto">
        <button type="button" onClick={updateTask} className="btn btn-lg btn-success mr-20">Update</button>
        <button type="button" onClick={cancelUpdate} className="btn btn-lg btn-warning">Cancel</button>
      </div>
    </div>
    <br />
  </>
);

export default UpdateForm;

/* eslint-disable react/prop-types */
const AddTaskForm = ({ newTask, setNewTask, addTask }) => (
  <>
    {/* Add Task */}
    <div className="row">
      <div className="col">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control form-control-lg"
        />
      </div>
      <div className="col-auto">
        <button type="button" onClick={addTask} className="btn btn-lg btn-success">Add Task</button>
      </div>
    </div>

    <br />
  </>

);

export default AddTaskForm;

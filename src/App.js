
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';


function App() {

  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // addd task
  const addTask = () => {
    let num = toDo.length + 1;
    let newEntry = { id: num, title: newTask, status: false }
    setToDo([...toDo, newEntry])
    setNewTask('')

  }

  // delete task

  const deleteTask = (id) => {

    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  // mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask)

  }

  // cancel task
  const cancelUpdate = () => {
    setUpdateData('')

  }

  // change task for update 
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry)
  }

  // update task
  const updateTask = () => {
    let filteredRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updateObject = [...filteredRecords, updateData]
    setToDo(updateObject);
    setUpdateData('');
  }

  return (
    <div className="container App">
      <br /><br />
      <h2>To Do List App (ReactJS)</h2>
      <br /><br />

      {/* Update Task*/}
      {updateData && updateData ? (
      
      <UpdateForm
      updateData = {updateData}
       updateTask = {updateTask}
       changeTask = {changeTask}
        cancelUpdate = {cancelUpdate}
      />

      ) : (
       <AddTaskForm 
         newTask = {newTask}
         setNewTask = {setNewTask}
         addTask = {addTask}
       />

      )

      }
      {toDo && toDo.length ? '' : 'No Task added... please add one'}
      <ToDo
      toDo = {toDo}
       markDone = {markDone}
        setUpdateData = {setUpdateData}
         deleteTask = {deleteTask}
      />
    </div>
  );
}

export default App;

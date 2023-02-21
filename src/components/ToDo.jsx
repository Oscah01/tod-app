/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({
  toDo, markDone, setUpdateData, deleteTask,
}) => (

  <>
    {toDo && toDo
      .sort((a, b) => (a.id > b.id ? 1 : -1))
      .map((task, index) => (
        <React.Fragment key={task.id}>

          <div className="col taskBig">
            <div className={task.status ? 'done' : ''}>
              <span className="taskNumber">{index + 1}</span>
              <span className="taskText">{task.title}</span>
            </div>
            <div className="iconWrap">
              <span role="presentation" title="Completed / Not completed" onClick={() => markDone(task.id)} onKeyDown={() => markDone(task.id)}>
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              {task.status ? null : (
                <span
                  role="presentation"
                  title="Edit"
                  onClick={() => setUpdateData({
                    id: task.id,
                    title: task.title,
                    status: !!task.status,
                  })}
                >
                  <FontAwesomeIcon icon={faPen} />

                </span>
              )}

              <span role="presentation" title="Delete" onClick={() => deleteTask(task.id)}>
                <FontAwesomeIcon icon={faTrashCan} />

              </span>
            </div>
          </div>

        </React.Fragment>
      ))}

  </>
);

export default ToDo;

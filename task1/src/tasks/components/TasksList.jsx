import React from "react";
import Task from "./Task"
import CreateTaskInput from "./CreateTaskInput.jsx";
import PropTypes from "prop-types";


const  TasksList = ({tasks, onCreate, onDelete, onChange}) =>{
  
 return( 
    
      <div className="todo-list">
        <CreateTaskInput onCreate={onCreate} />
        <ul className="list">
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={onDelete}
              onChange={onChange}
            />
          ))}
        </ul>
      </div>
    );
  };
// TasksList.propTypes = {
//   tasks:PropTypes.arrayOf(
//     PropTypes.shape({
//       text:PropTypes.string,
//       done: PropTypes.bool,
//       id:PropTypes.string,
//     })
//   ).isRequired,
//   onChange:PropTypes.func.isRequired,
//   onDelete:PropTypes.func.isRequired,
// }
export default TasksList 

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
              //id={task.id} text={task.text} done= {task.done}
            />
          ))}
        </ul>
      </div>
    );
  };

export default TasksList 

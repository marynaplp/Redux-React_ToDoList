import React from "react"
import TasksList from "./TasksList";

class ToDoList extends Component {
    componentDidMount(){
        this.props.getTaskList()
    }
    render(){
  return(
    <>
    <h1 className="title">Todo List</h1>
    <TasksList 
    tasks = {this.props.tasks}
    onCreate = {this.props.createTask}
    onDelete = {this.props.deleteTask}
    onChange = {this.props.updateTask}
    />
    </>
  )
}
}
export default ToDoList

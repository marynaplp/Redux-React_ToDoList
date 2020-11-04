import React from "react"
import TasksList from "./TasksList";
import * as tasksAction from "../tasks.actions"
import { sortedTaskListSelector } from "../tasks.selectors"
import { connect } from "react-redux"
import PropTypes from "prop-types"
class TodoList extends Component {
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
ToDoListPropTypes = {
  tasks: PropTypes.array(PropTypes.shape()),
  updateTask:PropTypes.func.isRequired,
  getTaskList: PropTypes.func.isRequired,
  createTask:PropTypes.func.isRequired,
  deleteTask:PropTypes.func.isRequired

}

const mapDispatch ={
getTaskList: tasksAction.getTaskList 

}
export default connect(mapState, mapDispatch)(TodoList)

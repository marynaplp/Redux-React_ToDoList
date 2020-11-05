import * as tasksGateway from "./tasks.gateway";
import { taskListSelector } from "./tasks.selectors"

export const TASK_LIST_RECEIVED = 'TASK/TASK_LIST_RECEIVED';

const taskListReceived = taskList => {
    return {
        type: TASK_LIST_RECEIVED,
        payload: {
            taskList,
        }
    }
}

export const getTasksList = () => {
    const thunkAction = function(dispatch) {
        tasksGateway
            .fetchTasksList()
            .then((tasksList) => dispatch(taskListReceived(tasksList)));
    };

    return thunkAction;
};
export const updateTask = taskId => {
    const thunkAction = function(dispatch, getState) {
        const state = getState();
        const taskList = taskListSelector(state);
        const task = taskList.find(task => task.id === taskId)
        const updatedTask = {
            ...task,
            done: !task.done,
        };
        tasksGateway.updateTask(taskId, updatedTask)
            .then(() => dispatch(getTasksList()))
    }
    return thunkAction
}
export const deleteTask = taskId => {
    const thunkAction = function(dispatch) {
        tasksGateway.deleteTask(taskId)
            .then(() => dispatch(getTasksList()))
    }
    return thunkAction
}
export const createTask = text => {
    const thunkAction = function(dispatch, getState) {
        const newTask = {
            text,
            done: false,
            createdAt: new Date().toISOString(),
        };
        tasksGateway.createTask(newTask)
            .then(() => dispatch(getTasksList()))
    }
    return thunkAction
}
import { fetchTasksList } from "./tasksGateway"

export const TASK_LIST_RECEIVED = 'TASK/TASK_LIST_RECEIVED';

const taskListReceived = taskList => {
    return {
        type: TASK_LIST_RECEIVED,
        payload: {
            taskList,
        }
    }
}

export const getTaskList = () => {
    const thunkAction = function(dispatch) {
        fetchTasksList().then(taskList => {
            dispatch(taskListReceived(taskList))
        })
    }
    return thunkAction
}
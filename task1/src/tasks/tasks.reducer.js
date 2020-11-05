import { TASK_LIST_RECEIVED } from "./tasks.actions"

const initialState = {
    taskList: []
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case TASK_LIST_RECEIVED:
            return {
                ...state,
                taskList: action.payload.taskList
            }

        default:
            return state
    }
}
export default taskReducer
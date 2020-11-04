import { createSelector } from reselect;
export const taskListSelector = (state) => state.tasks.taskList;

export const sortedTasksListSelector = createSelector(
    [tasksListSeletor],
    (tasksList) => {
        return tasksList.slice().sort((a, b) => a.done - b.done);
    }
);
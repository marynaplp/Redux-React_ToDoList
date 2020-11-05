import { createSelector } from 'reselect';

export const taskListSelector = (state) => state.tasks.taskList;

export const sortedTasksListSelector = createSelector(
    [taskListSelector],
    (tasksList) => {
        return tasksList.slice().sort((a, b) => a.done - b.done);
    }
);
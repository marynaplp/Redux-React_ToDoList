const baseUrl =
    "https://5ecedb5261c8480016701a8f.mockapi.io/api/v1/tasks";
export const createTask = (taskData) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) throw new Error("Failed to create task");
    });
};

export const fetchTasksList = () =>
    fetch(baseUrl).then((response) => {
        if (response.ok) return response.json();

        throw new Error("Failed to load tasks");
    });

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) throw new Error("Failed to change status of task");
    });
};

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "DELETE",
    }).then((response) => {
        if (!response.ok) throw new Error("Failed to delete task");
    });
};
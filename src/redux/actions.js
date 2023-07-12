// actions.js
export const editTask = (id, description) => {
    return {
        type: "EDIT_TASK",
        payload: { id, description },
    };
};

export const toggleDone = (id) => {
    return {
        type: "TOGGLE_DONE",
        payload: id,
    };
};


export const addTask = (newTask) => {
    return {
        type: "ADD_TASK",
        payload: newTask,
    };
};


// actions.js
export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id,
    };
};

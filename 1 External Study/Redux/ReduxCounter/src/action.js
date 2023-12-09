// Importing the correct action type
export const setChangedValue = (value) => {
    return {
        type: "SET_CHANGED_VALUE",
        payload: value,
    };
};

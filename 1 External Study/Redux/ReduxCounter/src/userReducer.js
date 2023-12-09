const userReducer = (state = { changedVal: 0 }, action) => {
    switch (action.type) {
        case "SET_CHANGED_VALUE": {
            return { ...state, changedVal: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;

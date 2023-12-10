const initialState = {
    count: 0
}

function reducer (state=initialState, action) {
    switch (action.type) {
        case 'incrementValue' :
            return {
                ...state,
                count: state.count+1
            }
        case 'decrementValue' :
            return {
                ...state,
                count: state.count-1
            }
        
        default :
            return state
    }
}

export default reducer;
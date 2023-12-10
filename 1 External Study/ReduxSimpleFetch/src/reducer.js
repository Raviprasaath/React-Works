const initialState = {
    response: []
}

function reducer (state=initialState, action) {
    switch (action.type) {
        case 'invokingAPI' :
            return {
                ...state,
                response : action.payload,
            }
        default :
            return state
    }
}

export default reducer;
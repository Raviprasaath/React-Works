const fetchDataRequest = () => {
    return {
        type: 'FETCH_DATA_REQUEST',
    };
};

const fetchDataSuccess = (data) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: data,
    };
};

const fetchDataFailure = (error) => {
    return {
        type: 'FETCH_DATA_FAILURE',
        payload: error,
    };
};

// Thunk action creator
export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        setTimeout(()=> {
            const fetchData = { message: 'Data fetched successfully' }
            dispatch(fetchDataSuccess(fakeData));
        }, 2000);
    }
}
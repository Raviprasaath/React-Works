export const invokeAPIFetch = () => (dispatch) => {
    fetch('https://api.github.com/users/Raviprasaath')
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: 'invokingAPI',
        payload: result
      })
    })
}




/* This is another way

export const invokeAPIFetch = () => {
    return (dispatch) => {
        fetch('https://api.github.com/users/Raviprasaath')
            .then(res => res.json())
            .then(result => {
                dispatch({
                    type: 'invokingAPI',
                    payload: result
                })
            })
    }
}

*/
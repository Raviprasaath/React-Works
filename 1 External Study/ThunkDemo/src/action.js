export const invokeAPI = () => (dispatch) => {
  fetch('https://api.github.com/users/Raviprasaath')
  .then(res => res.json())
  .then(result => 
    dispatch({
      type: 'postSave',
      payload: result,
    }),  
  );
}

// thunk is working based on the call back function
// here in 1st line dispatch is  a callback function


// below is another way to write the code
/*

export const invokeAPI = () => {
  return (dispatch) => {
    fetch('https://api.github.com/users/Raviprasaath')
    .then(res => res.json())
    .then(result => 
      dispatch({
        type: 'postSave',
        payload: result,
      }),  
    );
  }
}

*/
export const registerUser = ({ name, email, password }) => async dispatch => {
  dispatch({
    type: 'SET_USER',
    payload: { name, email, password },
  });
};

export const logout = () => dispatch => {
  dispatch({ type: 'REMOVE_USER' });
};

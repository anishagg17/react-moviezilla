const initialState = {
  user: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER':
      //   console.log(payload);
      return {
        user: payload,
      };

    case 'REMOVE_USER':
      //   console.log('loggedout');
      return {
        user: null,
      };
    default:
      return state;
  }
}

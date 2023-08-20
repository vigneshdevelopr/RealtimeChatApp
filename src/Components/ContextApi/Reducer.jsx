export const initialState = {
  user: null,
};

export const actionTypes = {
  Set_User: "Set_User",
};

const reducer = (state, action) => {
  switch (action.types) {
    case actionTypes.Set_User:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;

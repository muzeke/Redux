const initialState = {
  b: 1
};

const reducerB = (state = initialState, action) => {
  var newState = { ...state };

  if (action.type === "UPDATE_B") {
    return {
      ...state,
      b: action.a + state.b
    };
  }
  return newState;
};

export default reducerB;

const initialState = {
  a: 1
};

const reducerA = (state = initialState, action) => {
  var newState = { ...state };

  if (action.type === "UPDATE_A") {
    return {
      ...state,
      a: state.a + action.b
    };
  }

  return newState;
};

export default reducerA;

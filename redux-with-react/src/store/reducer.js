const initialState = {
  age: 21,
  history: []
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "AGE_UP") {
    //newState.age += action.value;
    return {
      ...state,
      age: state.age + action.value,
      history: state.history.concat({
        age: state.age + action.value,
        id: Math.random()
      })
    };
  }
  if (action.type === "AGE_DOWN") {
    return {
      ...state,
      age: state.age - action.value,
      history: state.history.concat({
        age: state.age - action.value,
        id: Math.random()
      })
    };
  }
  if (action.type === "REMOVE_HISTORY_ITEM") {
    return {
      ...state,
      history: state.history.filter(h => h.id !== action.key)
    };
  }
  return newState;
};

export default reducer;

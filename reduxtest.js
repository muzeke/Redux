const { createStore } = require("redux");

const initialState = {
  age: 21
};

//reducer
const myReducer = (state = initialState, action) => {
  var { type, value } = action;

  const newState = { ...state };

  if (type === "ADD") {
    newState.age += value;
  }

  if (type === "SUBSTRACT") {
    newState.age -= 1;
  }

  return newState;
};

//createStore
const store = createStore(myReducer);

store.subscribe(() => {
  console.log("State Changes: ", store.getState());
});

store.dispatch({ type: "ADD", value: 5 });
store.dispatch({ type: "ADD", value: 4 });
store.dispatch({ type: "ADD", value: 3 });
store.dispatch({ type: "ADD", value: 2 });
store.dispatch({
  type: "SUBSTRACT"
});

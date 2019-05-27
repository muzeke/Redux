# Redux

Starting with Redux

### What is Redux ?

- Redux is a predictable state container for JavaScript apps.
- Redux makes it easy to manage the state of your application. Another way of looking at this – it helps you manage the data you display and how you respond to user actions.
- Dan Abramov created Redux to make development more fun with better tooling.
- He’s the guy who’s written some amazing modules like create-react-app, react-hot-loader and react-dnd.
- He wanted a minimal API that improved the application structure and had better tools. At 2kb, Redux makes data management and debugging a whole lot easier.
- Redux was inspired by Flux and Elm.

### Redux without React :

Get Store from redux (with Node.JS)

```js
const { createStore } = require("redux");
```

Declare an Initial State

```js
const initialState = {
  tasks: []
};
```

Create Reducer

```js
const myReducer = (state = initialState, action) => {
  // conditions for dispactched actions

  //clone the state , e.g.
  const newState = { ...state }; //cloned via spread operator
  //return the new State
  return newState;
};
```

Declare/Create Redux Store

```js
const store = createStore(myReducer); //note the assignment of reducer here
```

Redux Subscribe

```js
store.subscribe(() => {
  //action inside here will be called whenever a State has change
});
```

Redux Action(s) using dispatch

```js
store.dispatch({});
```

### Redux with React

Using `create-react-app`

```npm
  npm install redux --save
  npm install react-redux --save
```

In the root script :

```js
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

For Every Component :

```js
import { connect } from "react-redux";

//functions mapStateToProps and mapDispatchToProps are user defined

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: () =>
      dispatch({
        type: "AGE_UP",
        value: 5
      }),
    handleDecrement: () =>
      dispatch({
        type: "AGE_DOWN",
        value: 5
      }),
    handleRemove: item => {
      dispatch({
        type: "REMOVE_HISTORY_ITEM",
        key: item.id
      });
    }
  };
}; //mapDispatchToProps

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
```

### Combining Reducers

In the root script as well

```js
//import combine reducers
import { createStore, combineReducers } from "redux";
//import reducer from "./store/reducer";

import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";

const rootReducer = combineReducers({
  reducerA,
  reducerB
});

const store = createStore(rootReducer);
```

In a component

```js
const mapStateToProps = state => {
  return {
    a: state.reducerA.a,
    b: state.reducerB.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateA: b =>
      dispatch({
        type: "UPDATE_A",
        b: b
      }),
    updateB: a =>
      dispatch({
        type: "UPDATE_B",
        a: a
      })
  };
};
```

### Redux Middlewares

#### Redux Thunk

Installation:

```npm
npm install redux thunk --save
```

In the root script

```js
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import reducer from "./store/reducer";

const store = createStore(reducer, applyMiddleware(thunk));
```

#### Redux Saga

Installation:

```npm
 npm install redux-saga
```

Boilerplate:

```js
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";

//create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//mount it on the redux store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

//run the saga
sagaMiddleware.run(rootSaga);
```

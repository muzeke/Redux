# Redux

Starting with Redux

### What is Redux ?

- Redux is a predictable state container for JavaScript apps.
- Redux makes it easy to manage the state of your application. Another way of looking at this – it helps you manage the data you display and how you respond to user actions.
- Dan Abramov created Redux to make development more fun with better tooling.
- He’s the guy who’s written some amazing modules like create-react-app, react-hot-loader and react-dnd.
- He wanted a minimal API that improved the application structure and had better tools. At 2kb, Redux makes data management and debugging a whole lot easier.
- Redux was inspired by Flux and Elm.

### Quick :

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

import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore, combineReducers } from "./redux";

const initState = 0;
const initState2 = {
  name: "ming",
  number: 11,
};
const reducer1 = function (state = initState, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    default:
      return state;
  }
};
const reducer2 = function (state = initState2, action) {
  switch (action.type) {
    case "des":
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  reducer1,
  reducer2,
});

const store = createStore(reducer);

const TestRedux = (props) => {
  const dispatch = props.dispatch;
  const state = props.state;
  console.log(props);
  const handleClick = () => {
    dispatch({
      type: "add",
    });
  };
  const handleClick2 = () => {
    dispatch({
      type: "des",
    });
  };
  return (
    <>
      <button onClick={handleClick}>点击add</button>
      <div>{state.reducer1}</div>
      <button onClick={handleClick2}>点击des</button>
      <div>{state.reducer2.number}</div>
    </>
  );
};

function App() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TestRedux state={state} dispatch={store.dispatch} />
        </div>
      </header>
    </div>
  );
}

export default App;

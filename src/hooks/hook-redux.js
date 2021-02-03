import React, { useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const defaultState = 0;
const context = React.createContext(null);
function HookRedux() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <div>
      <context.Provider value={{ state, dispatch }}>
        <Child1 />
      </context.Provider>
    </div>
  );
}

const Child1 = () => {
  const { state, dispatch } = useContext(context);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>点击添加</button>
      <button onClick={() => dispatch({ type: "decrement" })}>点击减少</button>

      <div>{state}</div>
    </div>
  );
};

export default HookRedux;

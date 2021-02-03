import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useReducer,
} from "react";

let init = { num: 0 };

function Callback() {
  const [state, dispatch] = useReducer(reducer, init);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          num: state.num + 1,
        };
      case "decrement":
        return {
          ...state,
          num: state.num - 1,
        };
      default:
        return state;
    }
  }

  console.log("渲染");

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>点击增加</button>
      <button onClick={() => dispatch({ type: "decrement" })}>点击减少</button>
      {state.num}
    </div>
  );
}

export default Callback;

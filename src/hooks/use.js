import React, { useState, useRef, useEffect } from "react";

let id;
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    id = setTimeout(() => {
      console.log(id);
    }, 1000);
  }, []);

  return <h1 onClick={() => setCount(count + 1)}>{count}</h1>;
}

setTimeout(() => {
  console.log(id);
}, 3000);

export default Counter;

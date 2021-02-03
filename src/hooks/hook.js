import React, { useEffect, useRef, useState } from "react";

function Hook() {
  const [state, setState] = useState(1);
  const domRef = useRef(1);

  function change() {
    setTimeout(() => {
      console.log(domRef);

      setState(domRef.current++);
    }, 1000);
  }

  return (
    <div>
      <button onClick={change}>点击修改</button>
      <div>{state.num}</div>
    </div>
  );
}

export default Hook;

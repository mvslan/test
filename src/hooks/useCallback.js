import React, { useCallback, useEffect, useMemo, useState } from "react";

let back = 0;

function Click(props) {
  useEffect(() => {
    console.log(back == props.onClick);
    back = props.onClick;
  });
  return <div onClick={props.onClick}>我是来看戏的</div>;
}

function Callback() {
  const [value, setValue] = useState(0);

  const click = useCallback(() => {
    console.log("click");
  }, []);

  function handleClick() {
    let val = value;
    val++;
    setValue(val);
  }

  return (
    <div>
      <Click onClick={click} />
      <button onClick={handleClick}>点击增加</button>
      {value}
    </div>
  );
}
a;
export default Callback;

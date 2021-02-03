import React, { useEffect, useMemo, useState } from "react";

function Memo() {
  const [value, setValue] = useState(0);
  const [n, setN] = useState(1);

  function com(num) {
    return num % 3;
  }

  const memoValue = useMemo(() => {
    return com(value);
  }, [value]);

  useEffect(() => {
    console.log(memoValue);
  });

  function handleClick() {
    let n2 = n;
    n2++;
    setN(n2);
  }

  return (
    <div>
      <button onClick={handleClick}>点击增加</button>
      {value}
    </div>
  );
}

export default Memo;

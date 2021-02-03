import React, { useEffect, useRef } from "react";

function Layout() {
  const domRef = useRef(null);

  function moveTo(dom, x, delay) {
    dom.style.transform = `translate(${x}px)`;
    dom.style.transition = `left ${delay}ms`;
  }

  useEffect(() => {
    moveTo(domRef.current, 300, 300);
  }, []);
  return (
    <div style={{ background: "yellow", height: "200px" }}>
      <p
        ref={domRef}
        style={{ width: "100px", height: "100px", background: "red" }}
      ></p>
    </div>
  );
}

export default Layout;

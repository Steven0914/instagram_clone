import "./App.css";
import React, { Fragment, useEffect, useRef } from "react";
import SideBar from "./components/SideBar.jsx";
import useComponentSize from "./hooks/useComponentSize";
import Router from "./router.jsx";

function App() {
  const [componentRef, size] = useComponentSize();
  const [componentRef1, size1] = useComponentSize();

  useEffect(() => {
    if (size.width < 610) $("#content").css("width", `calc(100vw - 10px)`);
    else $("#content").css("width", `calc(100vw - ${size1.width}px - 10px)`);
  }, [size1]);

  return (
    <div
      className={
        "flex flex-row-reverse " +
        (size.width < 610 ? "flex-col h-[100vh]" : "")
      }
      ref={componentRef}
    >
      <div
        id="content"
        className={
          "flex mx-auto "
          // + "w-[calc(100vw-100px)] "
          // (size.width !== 0 && size.width < 715
          //   ? "w-[calc(100vw-100px)]"
          //   : "w-[calc(100vw-300px)]")
        }
      >
        <Router />
      </div>
      <SideBar size={size} ref={componentRef1} />
    </div>
  );
}

export default App;

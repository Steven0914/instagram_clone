import { useEffect } from "react";

function Modal({ setModal, children }) {
  const exit = () => {
    if (setModal) setModal(false);
  };

  return (
    <>
      <div className="z-30 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="z-50 w-[500px] h-[500px] bg-white">{children}</div>
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-[rgb(0,0,0,0.5)]"
          onClick={() => exit()}
        ></div>
      </div>
    </>
  );
}

export default Modal;

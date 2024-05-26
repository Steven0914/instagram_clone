import { useState, useEffect, useRef } from "react";

function useComponentSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const componentRef = useRef(null);

  useEffect(() => {
    if (typeof componentRef !== "undefined") {
      const handleResize = () => {
        const { width, height } =
          componentRef.current?.getBoundingClientRect() ?? {
            width: 0,
            height: 0,
          };
        setSize({ width, height });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []);

  return [componentRef, size];
}

export default useComponentSize;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red">SideBar</h1>
    </>
  );
}

export default SideBar;

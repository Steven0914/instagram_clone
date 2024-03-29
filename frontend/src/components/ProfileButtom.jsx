// import { useEffect } from "react";

import { Link } from "react-router-dom";

function ProfileButton({ name, func }) {
  const onClick = () => {
    if (func) {
      func();
    }
  };

  return (
    <button
      className="bg-[#efefef] hover:bg-gray-200 px-[16px] py-[7px] rounded-[8px] ml-[8px] cursor-pointer"
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
}

export default ProfileButton;

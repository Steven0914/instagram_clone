import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import routes from "../routes";

import logo from "../assets/logo.svg";
import logo2 from "../assets/insta_icon.svg";
import SeemoreSVG from "../assets/seemore.svg";

function SideBar() {
  const location = useLocation();
  const pathname = location.pathname;

  console.log(routes);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return pathname === "/search" || pathname === "/massage" ? (
    <div className="w-[80px] border-r-2">
      <div className="mt-10 ml-3">
        <Link to={"/"}>
          <div className="w-[50px] h-[50px] rounded hover:bg-gray-200">
            <img
              src={logo2}
              alt={"clone-star"}
              className="w-[23px] h-[23px] ml-3 mt-2"
            />
          </div>
        </Link>
        <div className="mt-7"></div>
        <div>
          {routes.map(
            (v, i) =>
              v.menu && (
                <Link to={v.path} key={i} className="flex d-flex p-[1px] ">
                  <div className="w-[50px] h-[50px] hover:bg-gray-200 rounded ">
                    <img className="mt-3 ml-3" src={v.img} alt={v.engName} />
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="sticky top-0 h-[100vh] w-[250px] pt-[8px] pb-[20px] px-[12px] border-r-2">
      <div className="pt-[25px] pb-[16px] px-[12px] mb-[19px]">
        <img src={logo} alt={"clone-star"} />
      </div>
      <div className="h-[calc(100%-77px-28px)] flex flex-col justify-between">
        <div>
          {routes.map(
            (v, i) =>
              v.menu && (
                <Link
                  to={v.path}
                  key={i}
                  className="flex d-flex p-[12px] my-[4px]"
                >
                  <div className="w-[24px] h-[24px]">
                    <img src={v.img} alt={v.engName} />
                  </div>
                  <div className="pl-[16px]">{v.korName}</div>
                </Link>
              )
          )}
        </div>
        <Link to={"/"} className="flex d-flex p-[12px] my-[4px]">
          <div className="w-[24px] h-[24px]">
            <img src={SeemoreSVG} alt={"see more"} />
          </div>
          <div className="pl-[16px]">{"더 보기"}</div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import routes from "../routes";

import logo from "../assets/logo.svg";
import SeemoreSVG from "../assets/seemore.svg";

function SideBar() {
  const location = useLocation();
  const pathname = location.pathname;

  console.log(routes);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return pathname === "/search" || pathname === "/direct" ? (
    <div className="w-[300px]">
      <h1 className="text-3xl font-bold underline text-red">SideBar</h1>
      <div>
        <div>아이콘</div>
        <div>홈</div>
      </div>
    </div>
  ) : (
    <div className="sticky top-0 h-[100vh] w-[300px] pt-[8px] pb-[20px] px-[12px]">
      <div className="pt-[25px] pb-[16px] px-[12px] mb-[19px]">
        <img src={logo} alt={"clone-star"} />
      </div>
      <div className="h-[calc(100%-77px-28px)] flex flex-col justify-between">
        <div>
          {routes.map(
            (v, i) =>
              v.menu && (
                <Link
                  to={"/"}
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

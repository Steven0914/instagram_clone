import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import routes from "../routes";

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
    <div className="w-[300px]">
      <h1 className="text-3xl font-bold underline text-red">로고1</h1>
      {routes.map(
        (v, i) =>
          v.menu && (
            <Link to={"/"} key={i} className="flex d-flex p-[12px] my-[4px]">
              <div className="w-[24px] h-[24px]">
                <img src={v.img} alt={v.engName} />
              </div>
              <div className="pl-[16px]">{v.korName}</div>
            </Link>
          )
      )}
    </div>
  );
}

export default SideBar;

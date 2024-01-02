import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";

import HomeSVG from "./assets/home.svg";

const routes = [
  {
    path: "/",
    element: Mypage(),
    engName: "home",
    korName: "홈",
    img: HomeSVG,
    menu: true,
  },
  {
    path: "/profile",
    element: Mypage(),
    engName: "profile",
    korName: "프로필",
    img: HomeSVG,
    menu: true,
  },
  {
    path: "*",
    element: NotFound(),
    engName: "notfound",
    korName: "존재하지 않는 페이지",
    img: HomeSVG,
  },
];

export default routes;

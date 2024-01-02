import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";

import HomeSVG from "./assets/home.svg";

const routes = [
  {
    path: "/",
    element: Mypage(),
    engName: "mypage",
    korName: "메인페이지",
    img: HomeSVG,
    menu: true,
  },
  {
    path: "/mypage",
    element: Mypage(),
    engName: "mypage",
    korName: "마이페이지",
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

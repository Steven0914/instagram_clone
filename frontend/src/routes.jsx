import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import Mainpage from "./pages/Mainpage";
import PostDetail from "./pages/PostDetail";

import searchSVG from "./assets/Search.svg";
import massageSVG from "./assets/Messenger.svg";
import addSVG from "./assets/Add.svg";
import HomeSVG from "./assets/home.svg";
import userSVG from "./assets/User.svg";

const routes = [
  {
    path: "/",
    element: <Mainpage />,
    engName: "home",
    korName: "홈",
    img: HomeSVG,
    menu: true,
  },
  {
    path: "/search",
    element: <Mypage />,
    engName: "search",
    korName: "검색",
    img: searchSVG,
    menu: true,
  },
  {
    path: "/massage",
    element: <Mypage />,
    engName: "massage",
    korName: "메시지",
    img: massageSVG,
    menu: true,
  },
  {
    path: "/add",
    element: <Mypage />,
    engName: "profile",
    korName: "만들기",
    img: addSVG,
    menu: true,
  },
  {
    path: "/profile",
    element: <Mypage />,
    engName: "profile",
    korName: "프로필",
    img: userSVG,
    menu: true,
  },
  {
    path: "/posts/:id",
    element: <PostDetail />,
    engName: "postDetail",
    korName: "게시글 디테일",
    img: HomeSVG,
  },
  {
    path: "*",
    element: <NotFound />,
    engName: "notfound",
    korName: "존재하지 않는 페이지",
    img: HomeSVG,
  },
];

export default routes;

import { Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: <Mypage /> },
  { path: "/mypage", element: <Mypage /> },
  { path: "*", element: <NotFound /> },
];

const Router = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={route.path || index}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default Router;

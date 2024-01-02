import { Route, Routes } from "react-router-dom";
import routes from "./routes";

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

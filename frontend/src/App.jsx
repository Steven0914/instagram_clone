import "./App.css";
import SideBar from "./components/SideBar.jsx";
import Router from "./router.jsx";

function App() {
  return (
    <>
      <SideBar />
      <div className="w-[calc(100vw-300px)]">
        <Router />
      </div>
    </>
  );
}

export default App;

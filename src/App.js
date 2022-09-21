import { Route, Routes } from "react-router";
import "./App.css";
import BarAndLine from "./pages/BarAndLine";
import Line from "./pages/Line";
import Pie from "./pages/Pie";
import ScatterAndLine from "./pages/ScatterAndLine";
import Area from "./pages/Area";
import StackBar from "./pages/StackBar/index";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/BarAndLine">BarAndLine</Link>
        </li>
        <li>
          <Link to="/Line">Line</Link>
        </li>
        <li>
          <Link to="/Pie">Pie</Link>
        </li>
        <li>
          <Link to="/ScatterAndLine">ScatterAndLine</Link>
        </li>
        <li>
          <Link to="/Area">Area</Link>
        </li>
        <li>
          <Link to="/StackBar">StackBar</Link>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<>차트를 선택하세요</>} />
        <Route path="/BarAndLine" element={<BarAndLine />} />
        <Route path="/Line" element={<Line />} />
        <Route path="/Pie" element={<Pie />} />
        <Route path="/ScatterAndLine" element={<ScatterAndLine />} />
        <Route path="/Area" element={<Area />} />
        <Route path="/StackBar" element={<StackBar />} />
      </Route>
    </Routes>
  );
}

export default App;

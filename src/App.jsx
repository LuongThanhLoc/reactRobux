import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AccGame from "./components/AccGame";
import CuaHang from "./components/CuaHang";
import DichVu from "./components/DichVu";
import Nap from "./components/Nap";
import Robux from "./components/Robux";
import TrangChu from "./components/TrangChu";
import FormLogIn from "./form/FormLogIn";
import FormRegister from "./form/FormRegister";
import HomePage from "./layout/HomePage";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<HomePage></HomePage>}>
          <Route path="/" element={<TrangChu></TrangChu>}></Route>
          <Route path="/nap" element={<Nap></Nap>}></Route>
          <Route path="/cua-hang" element={<CuaHang></CuaHang>}></Route>
          <Route path="/robux" element={<Robux></Robux>}></Route>
          <Route path="/acc-game" element={<AccGame></AccGame>}></Route>
          <Route path="/dich-vu" element={<DichVu></DichVu>}></Route>
        </Route>
        <Route>
          <Route path="/dang-nhap" element={<FormLogIn></FormLogIn>}></Route>
          <Route
            path="/dang-ky"
            element={<FormRegister></FormRegister>}
          ></Route>
        </Route>
        <Route path="*" element={<>404 not find your page</>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

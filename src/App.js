import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoStateless from "./Components/DemoStateless";
import DemoStateFul from "./Components/DemoStateFul";
import BaiTapLayout1 from "./Components/BaiTapLayoutComponent/BaiTapLayout1";
import Databinding from "./Databiding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import BaiTapChonMauXe from "./BaiTapChonMauXe";
import DemoListAndKey from "./ListAndKeys/DemoListAndKey";
import DemoProps from "./Props/DemoProps";
import BaiTapGioHang from "./Components/BaiTapGioHang";
import BaiTapGioHangRedux from "./BaiTapRedux.js/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./BaiTapRedux.js/BaiTapGameXucXac/BaiTapGameXucXac";
import LifeCycle from "./LifeCycle/LifeCycle";
import FormComponent from "./FormComponent/FormComponent";
import DanhSachNguoiDung from "./FormComponent/DanhSachNguoiDung";

function App() {
  return (
    <div className="App">
      {/* <DemoStateless />
      <DemoStateFul /> */}

      {/* <BaiTapLayout1 /> */}
      {/* <DemoConditionalAndState /> */}

      {/* <Databinding /> */}

      {/* <HandleEvent /> */}

      {/* <BaiTapChonMauXe /> */}
      {/* <DemoListAndKey /> */}
      {/* <DemoProps /> */}
      {/* <BaiTapGioHang /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapGameXucXac /> */}
      {/* <LifeCycle /> */}
      {/* <FormComponent /> */}
      <DanhSachNguoiDung />
    </div>
  );
}

export default App;

/*Component để tái sử dụng
stateless = func => jsx
stateful = class (render) (Kế thừa từ component)


*/

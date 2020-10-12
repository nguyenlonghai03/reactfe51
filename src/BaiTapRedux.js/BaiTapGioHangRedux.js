import React, { Component } from "react";
import danhSachSanPham from "../Components/BaiTapGioHang/dataGioHang.json";
import GioHangRedux from "./GioHangRedux";
import SanPhamRedux from "./SanPhamRedux";

export default class BaiTapGioHangRedux extends Component {
  renderSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux sanPham={sanPham} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">BÀI TẬP GIỎ HÀNG REDUX1</h3>
        <div className="">
          <div className="text-right">Giỏ hàng (0)</div>
          <GioHangRedux />
        </div>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}

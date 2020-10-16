import React, { Component } from "react";
import { connect } from "react-redux";
import danhSachSanPham from "../Components/BaiTapGioHang/dataGioHang.json";
import GioHangRedux from "./GioHangRedux";
import SanPhamRedux from "./SanPhamRedux";

class BaiTapGioHangRedux extends Component {
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
          <div className="text-right">Giỏ hàng ({this.props.tinhTongSo})</div>
          <GioHangRedux />
        </div>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tinhTongSo: () => {
      dispatch({
        type: "TINH_TONG",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGioHangRedux);

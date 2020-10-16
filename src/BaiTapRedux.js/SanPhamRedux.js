import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
          style={{ width: "100%", height: "300px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      let spGH = { ...sanPhamClick, soLuong: 1 };
      const action = {
        type: "THEM_GIO_HANG",
        spGH,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);

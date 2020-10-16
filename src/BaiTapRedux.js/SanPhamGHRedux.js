import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamGHRedux extends Component {
  render() {
    const { spGioHang } = this.props;
    return spGioHang.map((sp, index) => {
      return (
        <tr>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img src={sp.hinhAnh} width={70} height={70} />
          </td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.tangGiamSoLuong(sp.maSP, true);
              }}
            >
              +
            </button>
            {sp.soLuong}
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.tangGiamSoLuong(sp.maSP, false);
              }}
            >
              -
            </button>
          </td>

          <td>{sp.giaBan}</td>
          <td>{sp.soLuong * sp.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(sp.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      const action = {
        type: "XOA_GIO_HANG",
        maSP,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      // console.log(maSP, tangGiam);
      const action = {
        type: "TANG_GIAM",
        maSP,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamGHRedux);

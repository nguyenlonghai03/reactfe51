import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

// Thư viện để kết nối react component vs redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return <SanPhamGHRedux spGioHang={this.props.gioHang} />;
  };

  render() {
    console.log(this.props.gioHang);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sp</th>
            <th>Tên sp</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}

// Lấy state từ redux store biến thành props của component
//Tham số state đại diện cho rootReducer, state bao gồm tất cả store nhỏ trong root
const mapStateToProps = (state) => {
  return {
    // Tạo props gioHang
    gioHang: state.StateBaiTapGioHang.gioHang,
  };
};

export default connect(mapStateToProps)(GioHangRedux); // Kết nối giữa GioHangRedux component với redux store, tạo component mới

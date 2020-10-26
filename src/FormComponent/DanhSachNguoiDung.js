import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { connect } from "react-redux";
import { XOA_NGUOI_DUNG } from "../Redux/constants/QuanLyNguoiDungConst";
import {
  suaNguoiDungAction,
  xoaNguoiDungAction,
} from "../Redux/action/QuanLyNguoiDungAction";
import NewFormComponent from "./NewFormComponent";

class DanhSachNguoiDung extends Component {
  renderMangNguoiDung = () => {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <td>{nguoiDung.maNguoiDung}</td>
          <td>{nguoiDung.tenNguoiDung}</td>
          <td>{nguoiDung.soDienThoai}</td>
          <td>{nguoiDung.email}</td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                this.props.dispatch(suaNguoiDungAction(nguoiDung));
              }}
            >
              Sửa
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                // let action = {
                //   type: XOA_NGUOI_DUNG,
                //   maNguoiDung: nguoiDung.maNguoiDung,
                // };
                // Hàm này khi sử dụng connect với redux sẽ tự có props này
                this.props.dispatch(xoaNguoiDungAction(nguoiDung.maNguoiDung));
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        {/* <FormComponent /> */}
        <NewFormComponent />
        <table className="table">
          <thead>
            <tr>
              <th>Mã người dùng</th>
              <th>Tên người dùng</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderMangNguoiDung()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(DanhSachNguoiDung);

import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  renderKetQua = () => {
    let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
      return (tongDiemXX += xucXac.so);
    }, 0);
    let ketQua = tongDiem > 12 ? "Tài" : "Xỉu";
    console.log("tongDiem", tongDiem);
    return (
      <div>
        <span className="display-4 text-dark">
          {tongDiem} - {ketQua}
        </span>
      </div>
    );
  };

  render() {
    return (
      <div classNam="container text-center ">
        <div className="display-4">{this.renderKetQua()}</div>
        <div className="display-4 mt-5">
          Bạn chọn: <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div className="display-4">
          Số bán thắng:{" "}
          <span className="text-danger">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi:{" "}
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    banChon: state.stateBaiTapGameXucXac.banChon,
    soBanThang: state.stateBaiTapGameXucXac.soBanThang,
    tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};
export default connect(mapStateToProps, null)(KetQuaTroChoi);

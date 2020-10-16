import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachXucXac extends Component {
  renderMangXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img
          key={index}
          src={xucXac.hinhAnh}
          style={{ width: "50px" }}
          className="mx-1"
        />
      );
    });
  };
  render() {
    return (
      <div className="row mt-5 text-center">
        <div className="col-3">
          <button className="btn btn-success p5">
            <span
              className="display-4"
              onClick={() => {
                this.props.taiXiu(true);
              }}
            >
              Tài
            </span>
          </button>
        </div>
        <div className="col-6">
          {this.renderMangXucXac()}
          {/* <div className="text-center text-danger display-4">
            {this.props.tongDiem}-{this.props.ketQua}
          </div> */}
        </div>
        <div className="col-3">
          <button className="btn btn-danger p5">
            <span
              className="display-4"
              onClick={() => {
                this.props.taiXiu(false);
              }}
            >
              Xỉu
            </span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
    // tongDiem: state.stateBaiTapGameXucXac.tongDiem,
    // ketQua: state.stateBaiTapGameXucXac.ketQua,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taiXiu: (taiXiu) => {
      dispatch({
        type: "TAI_XIU",
        taiXiu,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachXucXac);

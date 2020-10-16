import React, { Component } from "react";
import DanhSachXucXac from "./DanhSachXucXac";
import KetQuaTroChoi from "./KetQuaTroChoi";
import style from "./BaiTapGameXucXac.module.css";
import { connect } from "react-redux";

class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div
        className={`${style.fontGameXucXac}`}
        style={{
          backgroundImage: "url(./img/BaiTapGameXucXac/bgGame.png)",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <h1 className="display-4 text-center">Bài tập game xúc xắc</h1>
        <DanhSachXucXac />
        <KetQuaTroChoi />
        <button
          className="btn btn-success mt-4"
          onClick={() => {
            this.props.xuLyPlay();
          }}
        >
          Play game
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xuLyPlay: () => {
      dispatch({
        type: "XU_LY_PLAY",
      });

      // ranDomXucXac();
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);

import React, { Component } from "react";

export default class DemoListAndKey extends Component {
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];
  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li>{khoaHoc}</li>;
    });
  };
  // map trả về cái mảng, foreach thì không trả về gì hết
  //   renderDSKH = () => this.danhSachKhoaHoc.map((khoaHoc, index) => <li>khoaHoc</li>);
  render() {
    return (
      <div>
        <h2>DemoListAndKey</h2>
        <h3>Danh Sách Khóa Học</h3>
        <ul>
          {/* {this.danhSachKhoaHoc.forEach((item) => {
            return <li>{item}</li>;
          })} */}
          {this.renderDanhSachKhoaHoc()};
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";
import danhSachSanPham from "./dataGioHang.json";
import Modal from "./Modal";
import SanPham from "./SanPham";

/*Các bước thực hiện
1. dàn layout -done
2. Xác định dữ liệu thay đổi và lưu vào state -done
3. Lấy data trong state đi binding ra jsx -done
4. Render danh sách sản phẩm -done
5. Xây dựng chức năng xem chi tiết -done
6. Xây dựng chức năng thêm vào giỏ hàng -done
7. Xây dựng chức năng tăng giảm số lượng
8. Xây dựng chức năng xóa sản phẩm khỏi giỏ hàng
9. Xây dựng chức năng hiển thị tổng số sản phẩm trong giỏ hàng
 */

export default class BaiTapGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    // CardList sẽ là một mảng các obj của các card
    cardList: [],
  };

  deleteItem = (maSP) => {
    // xử lý xóa giỏ hàng
    console.log(maSP);
    let gioHangUpdate = [...this.state.cardList];
    const indexSP = gioHangUpdate.findIndex((spGH) => spGH.maSP === maSP);
    if (indexSP !== -1) {
      gioHangUpdate.splice(indexSP, 1);
    }

    // set lại state giỏ hàng
    this.setState({
      cardList: gioHangUpdate,
    });
  };

  tongSoLuong = () => {
    let tongSoLuong = this.state.cardList.reduce((soLuong, spGH, index) => {
      return (soLuong += spGH.soLuong);
    }, 0);
    return tongSoLuong;
  };
  tongTien = () => {
    let tongTien = this.state.cardList.reduce((tongSoTien, spGH, index) => {
      return (tongSoTien += spGH.soLuong * spGH.giaBan);
    }, 0);
    return tongTien;
  };

  tangGiamSoLuong = (maSP, tangGiam) => {
    // tangGiam = true => tăng, false => giảm
    console.log(maSP, tangGiam);
    let gioHangUpdate = [...this.state.cardList];
    const index = gioHangUpdate.findIndex((spGH) => spGH.maSP === maSP);
    if (tangGiam === true) {
      gioHangUpdate[index].soLuong += 1;
    } else {
      if (gioHangUpdate[index].soLuong > 1) {
        gioHangUpdate[index].soLuong -= 1;
      }
    }
    this.setState({
      cardList: gioHangUpdate,
    });
  };

  handleSanPhamChiTiet = (sanPhamChiTiet) => {
    this.setState({
      // sanPhamChiTiet : sanPhamChiTiet,
      sanPhamChiTiet,
    });
  };

  handleCardList = (sanPham) => {
    // Do sản phẩm là 1 cái obj nên copy lại 1 cái obj tương tự có thêm số lượng
    // Tạo ra sản phẩm mới và thêm vào thuộc tính số lượng
    // Tìm vị trí
    // Nếu điều kiện đúng trả về vị trí của mảng, nếu điều kiện không đúng trả về -1
    const index = this.state.cardList.findIndex((card) => {
      return card.maSP === sanPham.maSP;
    });
    let cardList = [...this.state.cardList];
    if (index !== -1) {
      //tìm thấy tăng số lượng
      cardList[index].soLuong += 1;
    } else {
      //Không tìm thấy => thêm vào mảng, tăng số lượng lên
      const newCard = { ...sanPham, soLuong: 1 };
      cardList = [...cardList, newCard];
    }

    this.setState({
      cardList,
    });
  };

  renderDanhSachSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            product={sanPham}
            xuLyChiTiet={this.handleSanPhamChiTiet}
            handleCardList={this.handleCardList}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ({this.tongSoLuong()} -{" "}
              {this.tongTien().toLocaleString()})
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">{this.renderDanhSachSanPham()}</div>
          </div>
          <Modal
            tangGiamSoLuong={this.tangGiamSoLuong}
            deleteItem={this.deleteItem}
            cardList={this.state.cardList}
          />
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.sanPhamChiTiet.hinhAnh}
                alt
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.state.sanPhamChiTiet.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.sanPhamChiTiet.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

import React, { Component } from "react";
import swal from "sweetalert2";

export default class FormComponent extends Component {
  state = {
    values: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
  };

  handleChangeInput = (event) => {
    // Lấy ra name và value
    let { name, value } = event.target;

    // Lấy ra attribute types (các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute("types");
    console.log(types);

    // Xử lý values
    let newValues = { ...this.state.values }; // Tạo ra values mới
    newValues[name] = value; // Thay đổi bên trong values

    // Xử lý errors
    let newErrors = { ...this.state.errors };
    newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";

    //Validation các trường đặt biệt
    if (types === "phoneNumber") {
      // Dấu cộng là kiểm tra lặp lại
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là số!";
      }
    }
    if (types === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value.trim())) {
        newErrors[name] = "Email không hợp lệ!";
      }
    }

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );

    //setState là phương thức bất đồng bộ
    // this.setState({
    //       [name]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };

  render() {
    return (
      <form
        className="card"
        onSubmit={(e) => {
          // cản sự kiện submit
          e.preventDefault();
          let valid = true;

          // Duyệt thuộc tính (key) trong obj values (duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
          for (let tenThuocTinh in this.state.values) {
            if (this.state.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }

          // Duyệt lỗi => tất cả lỗi phải bằng rỗng
          for (let tenThuocTinh in this.state.errors) {
            if (this.state.errors[tenThuocTinh].trim() !== "") {
              valid = false;
            }
          }

          if (!valid) {
            // alert("Dữ liệu không hợp lệ");
            swal.fire("Thông báo dữ liệu không hợp lệ!", "error");
            return; // Chặn sự kiện submit
          }

          swal.fire("Thông báo", "Thêm người dùng thành công!", "success");

          console.log("submit");
        }}
      >
        <div className="card-header bg-dark text-light font-weight-bold">
          <span>THÔNG TIN NGƯỜI DÙNG</span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  className="form-control"
                  name="maNguo  iDung"
                  onChange={this.handleChangeInput}
                  value={this.state.values.maNguoiDung}
                ></input>
                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
              </div>
              <div className="form-group">
                <span>Tên người dùng</span>
                <input
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                  value={this.state.values.tenNguoiDung}
                ></input>
                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <span>Số điện thoại</span>
                <input
                  types="phoneNumber"
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                  value={this.state.values.soDienThoai}
                ></input>
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  types="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                  value={this.state.values.email}
                ></input>
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>

            <div className="col-12 text-right">
              <button className="btn btn-success">Thêm người dùng</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

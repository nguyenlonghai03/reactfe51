import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert2";
import { xoaNguoiDungAction } from "../Redux/action/QuanLyNguoiDungAction";
import { XOA_NGUOI_DUNG } from "../Redux/constants/QuanLyNguoiDungConst";

class NewFormComponent extends Component {
  handleChangeInput = (event) => {
    // Lấy ra name và value
    let { name, value } = event.target;

    // Lấy ra attribute types (các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute("types");
    console.log(types);

    // Xử lý values
    let newValues = { ...this.props.stateForm.values }; // Tạo ra values mới
    newValues[name] = value; // Thay đổi bên trong values

    // Xử lý errors
    let newErrors = { ...this.props.stateForm.errors };
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

    // this.setState(
    //   {
    //     values: newValues,
    //     errors: newErrors,
    //   },
    //   () => {
    //     console.log(this.props.stateForm);
    //   }
    // );
    let action = {
      type: "HANDLE_CHANGE_INPUT",
      newState: {
        values: newValues,
        errors: newErrors,
      },
    };
    this.props.dispatch(action);
    //setState là phương thức bất đồng bộ
    // this.setState({
    //       [name]: value,
    //   },
    //   () => {
    //     console.log(this.props.stateForm);
    //   }
    // );
  };

  render() {
    // lấy giá trị chỉnh sửa render lên các value
    let {
      maNguoiDung,
      tenNguoiDung,
      soDienThoai,
      email,
    } = this.props.stateForm.values;

    return (
      <form
        className="card"
        onSubmit={(e) => {
          // cản sự kiện submit
          e.preventDefault();
          let valid = true;

          // Duyệt thuộc tính (key) trong obj values (duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
          for (let tenThuocTinh in this.props.stateForm.values) {
            if (this.props.stateForm.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }

          // Duyệt lỗi => tất cả lỗi phải bằng rỗng
          for (let tenThuocTinh in this.props.stateForm.errors) {
            if (this.props.stateForm.errors[tenThuocTinh].trim() !== "") {
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

          let action = {
            type: "THEM_NGUOI_DUNG",
            nguoiDung: this.props.stateForm.values,
          };
          this.props.dispatch(action);
        }}
      >
        <div className="card-header bg-dark text-light font-weight-bold">
          <span>THÔNG TIN NGƯỜI DÙNG</span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <span>Mã người dùng</span>

                <input
                  className="form-control"
                  name="maNguoiDung"
                  onChange={this.handleChangeInput}
                  value={maNguoiDung}
                ></input>
                <p className="text-danger">
                  {this.props.stateForm.errors.maNguoiDung}
                </p>
              </div>
              <div className="form-group">
                <span>Tên người dùng</span>
                <input
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                  value={tenNguoiDung}
                ></input>
                <p className="text-danger">
                  {this.props.stateForm.errors.tenNguoiDung}
                </p>
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
                  value={soDienThoai}
                ></input>
                <p className="text-danger">
                  {this.props.stateForm.errors.soDienThoai}
                </p>
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  types="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                  value={email}
                ></input>
                <p className="text-danger">
                  {this.props.stateForm.errors.email}
                </p>
              </div>
            </div>

            <div className="col-12 text-right">
              <button className="btn btn-success">Thêm người dùng</button>
              <button
                type="button"
                onClick={() => {
                  let action = {
                    type: "CAP_NHAT_THONG_TIN",
                    nguoiDungCapNhat: this.props.stateForm.values,
                  };
                  this.props.dispatch(action);
                }}
                className="btn btn-primary ml-2 "
              >
                Cập nhật thông tin
              </button>
            </div>
            <div className="col-12 form-group">
              <input
                name="maNguoiDungXoa"
                placeholder="Nhập vào mã người dùng cần xóa"
                className="form-control my-2"
                onChange={(e) => {
                  this.setState({
                    maNguoiDungXoa: e.target.value,
                  });
                }}
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  this.props.dispatch(
                    xoaNguoiDungAction(this.props.stateForm.maNguoiDungXoa)
                  );
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.QuanLyNguoiDungReducer.nguoiDungChinhSua,
    stateForm: state.QuanLyNguoiDungReducer.stateForm, // Lấy stateForm từ redux binding lên render
  };
};

export default connect(mapStateToProps)(NewFormComponent);

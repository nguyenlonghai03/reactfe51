import {
  SUA_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../constants/QuanLyNguoiDungConst";

const stateDefault = {
  mangNguoiDung: [
    {
      maNguoiDung: 1,
      tenNguoiDung: "Nguyen Van A",
      soDienThoai: "09090909",
      email: "nguyenvana@gmail.com",
    },
    {
      maNguoiDung: 2,
      tenNguoiDung: "Nguyen Van Teo",
      soDienThoai: "08080808",
      email: "nguyenvanteo@gmail.com",
    },
  ],
  nguoiDungChinhSua: {
    maNguoiDung: "",
    tenNguoiDung: "",
    soDienThoai: "",
    email: "",
  },
  stateForm: {
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
    maNguoiDungXoa: "",
  },
};
export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case XOA_NGUOI_DUNG: {
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      // Xóa phần tử trong mảng bằng cách lấy ra các phần tử không phải phần tử đó
      mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter(
        (nd) => nd.maNguoiDung != action.maNguoiDung
      );
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    case SUA_NGUOI_DUNG: {
      // Lấy người dùng đc click từ nút sửa
      let nguoiDungDuocClick = { ...action.nguoiDungChinhSua };
      state.nguoiDungChinhSua = nguoiDungDuocClick;

      console.log(action);
      state.stateForm = { ...state.stateForm, values: nguoiDungDuocClick };

      return { ...state };
    }
    case "HANDLE_CHANGE_INPUT": {
      state.stateForm = { ...action.newState };
      return { ...state };
    }
    case "CAP_NHAT_THONG_TIN": {
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      let index = mangNguoiDungCapNhat.findIndex(
        (nd) => nd.maNguoiDung === action.nguoiDungCapNhat.maNguoiDung
      );

      mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;

      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    case "THEM_NGUOI_DUNG": {
      const mangNguoiDungCapNhat = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

const stateDefault = {
  gioHang: [],
};

//Hàm reducer trả về state của ứng dụng

const BaiTapGioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG":
      {
        let gioHangCapNhat = [...state.gioHang];
        const index = gioHangCapNhat.findIndex(
          (sp) => sp.maSP === action.spGH.maSP
        );

        if (index !== -1) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          gioHangCapNhat.push(action.spGH);
        }

        state.gioHang = gioHangCapNhat;
        // Kiểu dữ liệu của state là mảng hoặc object thì phải tạo ra 1 cái obj mới để có thể render lại, nếu chỉ chấm thay đổi thì sẽ k render lại, do tính bất biến của redux
        return { ...state };
      }
      break;
    case "XOA_GIO_HANG":
      {
        let gioHangCapNhat = [...state.gioHang];
        const index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.maSP);
        if (index !== -1) {
          gioHangCapNhat.splice(index, 1);
        }
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;

    case "TANG_GIAM": {
      let gioHangCapNhat = [...state.gioHang];
      const index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.maSP);

      if (index !== -1) {
        if (action.tangGiam) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1;
          }
        }
      }

      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }

  return { ...state };
};

export default BaiTapGioHangReducer;

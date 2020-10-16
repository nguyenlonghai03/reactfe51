const stateDefault = {
  banChon: "Win hộ",
  mangXucXac: [
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/2.png" },
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/2.png" },
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/2.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
  //   tongDiem: 0,
  //   ketQua: "??",
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "TAI_XIU": {
      if (action.taiXiu) {
        state.banChon = "Tài";
      } else {
        state.banChon = "Xỉu";
      }
      return { ...state };
    }

    case "XU_LY_PLAY": {
      console.log(action);
      // Random xuc xac
      let mangXucXacUpDate = [...state.mangXucXac];
      mangXucXacUpDate.map((xucXac, index) => {
        let ranDom = Math.floor(Math.random() * 6 + 1);
        xucXac.so = ranDom;
        xucXac.hinhAnh = `./img/BaiTapGameXucXac/${ranDom}.png`;
      });

      // Tăng tổng số bàn chơi:
      state.tongSoBanChoi += 1;

      // Xử lý thắng
      let tongSoDiem = mangXucXacUpDate.reduce((tongSoDiem, xucXac, index) => {
        return (tongSoDiem += xucXac.so);
      }, 0);

      console.log(tongSoDiem);
      if (
        (tongSoDiem < 13 && state.banChon === "Tài") ||
        (tongSoDiem >= 13 && state.banChon === "Xỉu")
      ) {
        state.soBanThang += 1;
      }

      //   state.tongDiem = tongSoDiem;
      //   if (tongSoDiem < 13) {
      //     state.ketQua = "Tài";
      //   } else {
      //     state.ketQua = "Xỉu";
      //   }

      state.mangXucXac = mangXucXacUpDate;

      return { ...state };
    }
  }
  return { ...state };
};

export default BaiTapGameXucXacReducer;

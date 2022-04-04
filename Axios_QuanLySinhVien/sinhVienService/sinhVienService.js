import axios from "axios";
const BASE_URL = "https://624902de20197bb4626e6a21.mockapi.io/sv";

export const sinhVienService = {
  layDanhSachSinhVien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
};

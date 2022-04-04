import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachSinhVien from "./DanhSachSinhVien/DanhSachSinhVien";
import ModalSinhVien from "./ModalSinhVien/ModalSinhVien";
import { SET_DANH_SACH_SV } from "./Redux/constants/quanLySVConstant";
import { sinhVienService } from "./sinhVienService/sinhVienService";

class Axios_QuanLySinhVien extends Component {
  componentDidMount() {
    sinhVienService
      .layDanhSachSinhVien()
      .then((res) => {
        // console.log(res);
        // this.setState({ dssv: res.data });
        this.props.setDSSV(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <p className="display-3 pt-3 text-center">Quản Lý Sinh Viên</p>
        <ModalSinhVien />
        <DanhSachSinhVien />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setDSSV: (dssv) => {
      dispatch({
        type: SET_DANH_SACH_SV,
        payload: dssv,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Axios_QuanLySinhVien);

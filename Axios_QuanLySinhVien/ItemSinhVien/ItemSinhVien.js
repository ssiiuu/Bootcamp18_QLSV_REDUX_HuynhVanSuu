import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SUA_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../Redux/constants/quanLySVConstant";

class ItemSinhVien extends Component {
  render() {
    let { sv } = this.props;
    return (
      <tr>
        <td>{sv.id}</td>
        <td>{sv.name}</td>
        <td>{sv.email}</td>
        <td>{sv.phone}</td>
        <td className="d-flex">
          <button
            className="btn btn-success mr-1"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.suaSV(sv);
            }}
          >
            Sửa
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.xoaSV(sv.id);
            }}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    xoaSV: (id) => {
      dispatch({
        type: XOA_SINH_VIEN,
        payload: id,
      });
    },
    suaSV: (sv) => {
      dispatch({
        type: SUA_SINH_VIEN,
        payload: sv,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemSinhVien);

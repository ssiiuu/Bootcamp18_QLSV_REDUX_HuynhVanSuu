import React, { Component } from "react";
import { connect } from "react-redux";
import ItemSinhVien from "../ItemSinhVien/ItemSinhVien";
import { quanLySVReducer } from "../Redux/reducers/quanLySVReducer";
class DanhSachSinhVien extends Component {
  render() {
    // let { dssv } = this.props;
    return (
      <div className="container p-3">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dssv.map((sv) => {
              return <ItemSinhVien sv={sv} key={sv.id} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    dssv: state.quanLySVReducer.dssv,
  };
};

export default connect(mapStateToProps)(DanhSachSinhVien);

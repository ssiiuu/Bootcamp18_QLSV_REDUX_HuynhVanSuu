import React, { Component } from "react";
import { connect } from "react-redux";
import {
  THEM_SINH_VIEN,
  SUA_SINH_VIEN,
  CAP_NHAT_SINH_VIEN,
} from "../Redux/constants/quanLySVConstant";
class ModalSinhVien extends Component {
  state = {
    sinhVien: {
      id: "",
      name: "",
      phone: "",
      email: "",
    },
  };
  // handleOnChangId(e) {
  //   console.log(e.target.value);
  //   let CloneSV = { ...this.state.sinhVien };

  //   CloneSV.id = e.target.value;
  //   this.setState({ sinhVien: CloneSV });
  // }
  handleOnChang(e) {
    // console.log(e.target.value);
    this.setState({
      sinhVien: { ...this.state.sinhVien, [e.target.name]: e.target.value },
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);

    if (nextProps.editSinhVien) {
      this.setState({
        sinhVien: nextProps.editSinhVien,
      });
    } else {
      this.setState({
        sinhVien: {
          id: "",
          name: "",
          phone: "",
          email: "",
        },
      });
    }
  }
  render() {
    // console.log("editSinhVien", this.props.editSinhVien);
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
          onClick={this.props.resetEditSinhVien}
        >
          Thêm sinh viên
        </button>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {this.props.editSinhVien
                    ? "Cập Nhật Sinh Viên"
                    : "Thêm Sinh Viên"}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="id">Id</label>
                  <input
                    value={this.state.sinhVien.id}
                    type="text"
                    name="id"
                    id="id"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    onChange={(e) => {
                      this.handleOnChang(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Tên</label>
                  <input
                    value={this.state.sinhVien.name}
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    onChange={(e) => {
                      this.handleOnChang(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    value={this.state.sinhVien.email}
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    onChange={(e) => {
                      this.handleOnChang(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone </label>
                  <input
                    value={this.state.sinhVien.phone}
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    onChange={(e) => {
                      this.handleOnChang(e);
                    }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  id="closeBtn"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    let { sinhVien } = this.state;
                    document.getElementById("closeBtn").click();
                    this.setState(
                      {
                        sinhVien: {
                          id: "",
                          name: "",
                          phone: "",
                          email: "",
                        },
                      },
                      () => {
                        this.props.editSinhVien
                          ? this.props.capNhatSinhVien(sinhVien)
                          : this.props.themSV(sinhVien);
                      }
                    );
                  }}
                  type="button"
                  className="btn btn-primary"
                >
                  {this.props.editSinhVien ? "Cập nhật" : "Thêm"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    themSV: (sv) => {
      dispatch({
        type: THEM_SINH_VIEN,
        payload: sv,
      });
    },
    resetEditSinhVien: () => {
      dispatch({
        type: SUA_SINH_VIEN,
        payload: null,
      });
    },
    capNhatSinhVien: (sv) => {
      dispatch({
        type: CAP_NHAT_SINH_VIEN,
        payload: sv,
      });
    },
  };
};

let mapStateToProps = (state) => {
  return {
    editSinhVien: state.quanLySVReducer.editSinhVien,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalSinhVien);

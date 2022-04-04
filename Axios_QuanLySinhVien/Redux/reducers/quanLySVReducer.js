import { cloneElement } from "react";
import {
  CAP_NHAT_SINH_VIEN,
  SET_DANH_SACH_SV,
  SUA_SINH_VIEN,
  THEM_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../constants/quanLySVConstant";

const initialState = {
  dssv: [],
  editSinhVien: null,
};

export const quanLySVReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_SV: {
      state.dssv = action.payload;
      return { ...state };
    }
    case THEM_SINH_VIEN: {
      let CloneArr = [...state.dssv];
      CloneArr.push(action.payload);
      state.dssv = CloneArr;
      return { ...state };
    }
    case XOA_SINH_VIEN: {
      let id = action.payload;
      let CloneArr = [...state.dssv];
      let index = CloneArr.findIndex((sv) => {
        return sv.id === id;
      });
      index !== -1 && CloneArr.splice(index, 1);
      return { ...state, dssv: CloneArr };
    }
    case SUA_SINH_VIEN: {
      state.editSinhVien = action.payload;
      return { ...state };
    }
    case CAP_NHAT_SINH_VIEN: {
      let CloneArr = [...state.dssv];
      let index = CloneArr.findIndex((sv) => {
        return sv.id === action.payload.id;
      });
      if (index !== -1) {
        CloneArr[index] = action.payload;
      }
      console.log(action.payload);
      state.dssv = CloneArr;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

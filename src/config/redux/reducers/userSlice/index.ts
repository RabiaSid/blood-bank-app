import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  isLogin: boolean;
  id: number;
  firstName: string;
  lastName: string;
  Image: string | null;
  email: string;
  cnic: string;
  bloodGroup: string;
  personalDetail: Record<string, any>;
};

let initialState: UserState = {
  isLogin: false,
  id: 1,
  firstName: "abc",
  lastName: "def",
  Image: null,
  email: "abc",
  cnic: "00000-000000-0",
  bloodGroup: "abc",
  personalDetail: {},
};

const savedState = JSON.parse(localStorage.getItem("userState") || "null");
if (savedState) {
  initialState = savedState;
}

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.Image = action.payload.Image;
      state.email = action.payload.email;
      state.cnic = action.payload.cnic;
      state.bloodGroup = action.payload.bloodGroup;
      state.personalDetail = { ...action.payload };
      localStorage.setItem("userState", JSON.stringify(state));
    },
    edit: () => {},
  },
});

export const { add, edit } = UserSlice.actions;
export default UserSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// let initialState = {
//   isLogin: false,
//   id: 1,
//   firstName: "abc",
//   Image: null ,
//   email: "abc",
//   cnic: "00000-000000-0",
//   bloodGroup: "abc",
//   personalDetail: {},
// };

// export const UserSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     add: (state, action) => {
//       state.isLogin = true;
//       state.id = action.payload.id;
//       state.firstName = action.payload.firstName;
//       state.Image = action.payload.Image;
//       state.email = action.payload.email;
//       state.cnic = action.payload.cnic;
//       state.bloodGroup = action.payload.bloodGroup;
//       state.personalDetail = { ...action.payload };
//     },
//     edit: () => {},
//   },
// });

// export const { add, edit } = UserSlice.actions;
// export default UserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLogin: false,
  id: 1,
  firstName: "abc",
  Image: null ,
  email: "abc",
  cnic: "00000-000000-0",
  bloodGroup: "abc",
  personalDetail: {},
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.Image = action.payload.Image;
      state.email = action.payload.email;
      state.cnic = action.payload.cnic;
      state.bloodGroup = action.payload.bloodGroup;
      state.personalDetail = { ...action.payload };
    },
    edit: () => {},
  },
});

export const { add, edit } = UserSlice.actions;
export default UserSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// let initialState ={
//     isLogin: false,
//     id:1,
//     userName:"abc",
//     personalDetail:{},
// }

// export const UserSlice = createSlice({
//     name:"user",
//     initialState,
//     reducers: {
//         add: (state , action) => {
//             state.isLogin = true;
//             state.personalDetail = {...action.payload}
//              console.log(action.payload)
//         },
//         edit: () => {},

//     }
// })

// export const { add, edit } = UserSlice.actions;
// export default UserSlice.reducer;

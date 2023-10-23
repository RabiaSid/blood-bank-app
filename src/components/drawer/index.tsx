import React from 'react'
import { useState } from "react";
import { Drawer } from "antd";
import InputField from "../input/Input-field";
import PrimaryButton from "../button/primary-button";
import { useNavigate } from "react-router-dom";
// import { fbSignUp } from "../../../config/firebase/firebase-methods";
import DropDown from "../input/dropdown";
import MenuItem from "@mui/material/MenuItem";
import CheckboxLabels from "../check-box";
import { fbSignUp, imgDB } from "../../config/firebase/firebase-methods";
import { useDispatch } from "react-redux";
import { add } from "../../config/redux/reducers/userSlice";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import FileUpload from "../input/file-input";

export default function AppDrawer() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState<any>({
    Image: {},
    gender: "",
  });

  const [maleChecked, setMaleChecked] = useState<any>(false);
  const [femaleChecked, setFemaleChecked] = useState<any>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // signup

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const handleGenderChange = (event: any) => {
    const selectedGender = event.target.value;
    setModel((prevModel: any) => ({
      ...prevModel,
      gender: selectedGender,
    }));
  };

  const navigate = useNavigate();

  const BloodGroups = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
  ];

  const handleImageUpload = (e: any) => {
    console.log(e.target.files[0]);
    const imgs = ref(imgDB, `Imgs/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((res) => {
      console.log(res, "imgs");
      getDownloadURL(res.ref).then((val) => {
        console.log(val);
        model.Image = val; 
      });
    });
  };

  let signUpUser = () => {
    console.log("Model data:", model);
    fbSignUp(model)
      .then((res: any) => {
        console.log("Response data:", res);
        dispatch(add({ ...res }));
        navigate("/app-home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <span onClick={showDrawer} className="px-2 fs-5 fw-bold">
        SignUp
      </span>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="">
          <h1 className="fs-2 fw-bold">Sign Up</h1>
        </div>
        <div className="">
          <FileUpload onChange={(e: any) => handleImageUpload(e)} />
        </div>
        <div className="">
          <InputField
            value={model.firstName || ""}
            onChange={(e: any) => fillModel("firstName", e.target.value)}
            label="First Name"
          />
        </div>
        <div className="">
          <InputField
            value={model.lastName || ""}
            onChange={(e: any) => fillModel("lastName", e.target.value)}
            label="Last Name"
          />
        </div>
        <div className="">
          <InputField
            value={model.email || ""}
            onChange={(e: any) => fillModel("email", e.target.value)}
            label="Email"
          />
        </div>
        <div className="">
          <InputField
            value={model.cnic || ""}
            onChange={(e: any) => fillModel("cnic", e.target.value)}
            label="Cnic"
          />
        </div>
        <div className="">
          <InputField
            value={model.password || ""}
            onChange={(e: any) => fillModel("password", e.target.value)}
            label="Password"
          />
        </div>
        <div className="py-1">
          <DropDown
            HeaderValue="blood Group"
            SelectValue={model.bloodGroup}
            SelectOnChange={(e: any) => fillModel("bloodGroup", e.target.value)}
          >
            {BloodGroups.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DropDown>
        </div>
        <div className="">
          <CheckboxLabels
            id="male"
            name="gender"
            value="male"
            label="male"
            checked={model.gender === "male" || maleChecked}
            onChange={handleGenderChange}
          />
          <CheckboxLabels
            id="female"
            name="gender"
            value="female"
            label="female"
            onChange={handleGenderChange}
            checked={model.gender === "female" || femaleChecked}
          />
        </div>
        <div className="">
          <PrimaryButton onClick={signUpUser} label="Sign Up" />
        </div>
      </Drawer>
    </>
  );
}

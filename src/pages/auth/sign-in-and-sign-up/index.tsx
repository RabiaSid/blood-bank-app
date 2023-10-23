import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/primary-button";
import InputField from "../../../components/input/Input-field";
import AppDrawer from "../../../components/drawer";
import { fbLogin } from "../../../config/firebase/firebase-methods";
import { useDispatch } from "react-redux";
import { add } from "../../../config/redux/reducers/userSlice";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [model, setModel] = useState<any>({
    id:""
  });

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
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
      <div
        className="row m-0 p-0 d-flex justify-content-center align-items-center"
        style={{
          background: `#ffffff`,
          height: "100vh",
        }}
      >
        <div
          className="w-50 p-5 rounded-lg"
          style={{
            background: `rgba(179, 214, 252,.2)`,
          }}
        >
          <div className="py-3">
            <h1 className="fs-2 fw-bold">Login</h1>
          </div>

          <div className="py-3">
            <InputField
              value={model.email || ""}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-3">
            <InputField
              value={model.password || ""}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>

          <div className="py-3">
            <Button onClick={LoginUser} label="Sign in" />
          </div>
          <div className="py-3">
            <p className="text-dark">
              no account?
              <AppDrawer />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

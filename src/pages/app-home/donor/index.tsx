import React from 'react'
import { useState } from "react";
import DisableInput from "../../../components/input/disable-input";
import { useSelector } from "react-redux";
import { fbAdd } from "../../../config/firebase/firebase-methods";
import IconButton from "../../../components/button/icon-button";

export default function Donor() {
  const userData = useSelector((a: any) => a.user);
  const [model, setModel] = useState<any>({
    firstName: userData.firstName,
    email: userData.email,
    cnic: userData.cnic,
    bloodGroup: userData.bloodGroup,
  });

  const fillModel = (key: string, val: any) => {
    setModel({
      ...model,
      [key]: val,
    });
  };

  let donorAdd = () => {
    fbAdd("donorList", model)
      .then((res: any) => {
        console.log("Data saved to Firebase:", res);
        setModel({});
      })
      .catch((err) => {
        console.error("Error saving data to Firebase:", err);
      });
  };

  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-4">
          <DisableInput
            value={userData.firstName || model.firstName}
            onChange={(e: any) => fillModel("firstName", e.target.value)}
            label="First Name"
          />
        </div>
        <div className="col-4">
          <DisableInput
            value={userData.email || model.email}
            onChange={(e: any) => fillModel("email", e.target.value)}
            label="Email"
          />
        </div>
        <div className="col-4">
          <DisableInput
            value={userData.cnic || model.cnic}
            onChange={(e: any) => fillModel("cnic", e.target.value)}
            label="CNIC"
          />
        </div>
        <div className="col-4">
          <DisableInput
            value={userData.bloodGroup || model.bloodGroup}
            onChange={(e: any) => fillModel("bloodGroup", e.target.value)}
            label="Blood Group"
          />
        </div>
        <div className="col-12">
          <div className="row m-0 p-0">
            <div className="col-4">
              <IconButton label="Donate" onClick={donorAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

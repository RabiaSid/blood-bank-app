import React from 'react';
import { useState } from "react";
import IconButton from "../../components/button/icon-button";
import Donor from "./donor";
import { useSelector } from "react-redux";
import Acceptance from "./acceptance";
import { logo } from "../../assets";

export default function AppHome() {
  const userData = useSelector((state: any) => state.user);
  const [selectedSection, setSelectedSection] = useState("donor");

  const showDonorSection = () => {
    setSelectedSection("donor");
  };

  const showAcceptanceSection = () => {
    setSelectedSection("acceptance");
  };

  return (
    <>
      <div className="row m-0 p-0 d-flex justify-content-center align-items-between" style={{ minHeight: "100vh" }}>
        <div className="col-12 py-1 shadow-sm" style={{ height: "10vh", background: `rgba(255, 220, 178, 0.2)` }}>
          <div className="row m-0 p-0 d-flex justify-content-between align-items-center">
            <div className="col-4">
              <img src={logo} style={{ width: "auto", height: "4vh" }} /><h3>Blood Bank App</h3>
            </div>
            <div className="col-4">
              <div className="row m-0 p-0">
                <div className="col-6">{userData?.firstName}</div>
                <div className="col-6">
                  {userData?.Image && (
                    <img
                      src={userData.Image}
                      style={{
                        border: "1px solid green",
                        width: "35px",
                        height: "35px",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 py-1" style={{ height: "8vh" }}>
          <div className="row m-0 p-0 d-flex justify-content-center">
            <div className="col-5">
              <div className="row m-0 p-0">
                <div className="col-6">
                  <IconButton label="Donor" onClick={showDonorSection} />
                </div>
                <div className="col-6">
                  <IconButton
                    label="Acceptance"
                    onClick={showAcceptanceSection}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {selectedSection === "donor" && (
          <div className="col-12" style={{ minHeight: "80vh" }}>
            <Donor />
          </div>
        )}

        {selectedSection === "acceptance" && (
          <div className="col-12" style={{ minHeight: "90vh" }}>
            <Acceptance />
          </div>
        )}
      </div>
    </>
  );
}

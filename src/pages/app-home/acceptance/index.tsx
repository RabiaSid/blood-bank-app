import { useState, useEffect } from "react";
import { fbGet } from "../../../config/firebase/firebase-methods";
import DropDown from "../../../components/input/dropdown";
import { MenuItem } from "@mui/material";
import CustomTableRow from "../../../components/table/table-row";
import CustomTableContainer from "../../../components/table/table-container";
import { useSelector } from "react-redux";

export default function Acceptance() {
  const x = useSelector((state: any) => state.user);
  const [acceptanceList, setAcceptanceList] = useState<any>([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(x.bloodGroup);

  const BloodGroups = [
    { value: "A", label: "A" },
    { value: "O", label: "O" },
    { value: "B", label: "B" },
    { value: "AB", label: "AB" },
  ];

  const GetacceptanceList = () => {
    fbGet("donorList")
      .then((res: any) => {
        console.log("Data from Firebase:", res);
        setAcceptanceList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetacceptanceList();
  }, []);

  const filterAcceptanceList = () => {
    if (selectedBloodGroup === "") {
      return acceptanceList;
    }
    return acceptanceList.filter((x: any) =>
      x.bloodGroup.includes(selectedBloodGroup)
    );
  };

  const handleBloodGroupChange = (event: any) => {
    setSelectedBloodGroup(event.target.value);
  };

  useEffect(() => {
    if (x.bloodGroup) {
      setSelectedBloodGroup(x.bloodGroup);
    }
  }, [x.bloodGroup]);

  return (
    <>
      <div className="row m-0 p-0 ">
        <div className="col-4 ">
          <DropDown
            HeaderValue="Blood Group"
            SelectValue={selectedBloodGroup}
            SelectOnChange={handleBloodGroupChange}
          >
            {BloodGroups.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DropDown>
        </div>

        <div className="col-12">
          <CustomTableContainer
            cols={[
              {
                heading: "Quiz",
                key: "quiz",
              },
              {
                heading: "Point",
                key: "point",
              },
              {
                heading: "Total",
                key: "total",
              },
            ]}
          >
            {filterAcceptanceList().map((x: any, i: any) => (
              <CustomTableRow
                key={x.id}
                column1={i + 1}
                column2={`${
                  x?.firstName &&
                  x.firstName.charAt(0).toUpperCase() + x.firstName.slice(1)
                }  ${
                  x?.lastName &&
                  x.lastName.charAt(0).toUpperCase() + x.lastName.slice(1)
                }`}
                column3={x.bloodGroup}
              />
            ))}
          </CustomTableContainer>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#202124",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(255, 220, 178, 0.2)",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#ffffff",
  },
  // hcolumn1e last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  spacing: 8,
}));

type tableRowProps = {
  key: any;
  column1?: any;
  column2?: any;
  column3?: any;
  column4?: any;
  column5?: any;
  column6?: any;
  column7?: any;
  onClick?: (...args: any[]) => any;
};

export default function CustomTableRow(props: tableRowProps) {
  const {
    key,
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    onClick,
  } = props;
  return (
    <>
      <StyledTableRow key={key} onClick={onClick}>
        {column1 !== undefined && (
          <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
            {column1}
          </StyledTableCell>
        )}
        {column2 !== undefined && (
          <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
            {column2}
          </StyledTableCell>
        )}
        {column3 !== undefined && (
          <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
            {column3}
          </StyledTableCell>
        )}
        {column4 !== undefined && (
          <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
            {column4}
          </StyledTableCell>
        )}
        {column5 !== undefined && (
          <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
            {column5}
          </StyledTableCell>
        )}

        {column6 !== undefined && (
          <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
            {column6}
          </StyledTableCell>
        )}
        {column7 !== undefined && (
          <StyledTableCell sx={{ height: "8vh", paddingY: 1 }} align="left">
            {column7}
          </StyledTableCell>
        )}
      </StyledTableRow>
    </>
  );
}

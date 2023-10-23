import React from 'react'
import { ReactNode } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#202124",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


type tableProps = {
  cols: any[];
  children?:ReactNode
};

export default function CustomTableConatiner(props: tableProps) {
  const { cols, children } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          {cols.map((x) => (
              <StyledTableCell align="left">{x.heading}</StyledTableCell>

            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {children}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



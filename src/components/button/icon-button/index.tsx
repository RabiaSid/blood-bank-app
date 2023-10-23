import React from 'react'
import Button from "@mui/material/Button";

type ButtonProps = {
  startIcon?: any;
  label?: string;
  onClick?: (...args: any[]) => any;
  children?: React.ReactNode;
};

export default function IconButton(props: ButtonProps) {
  const { startIcon, label, onClick, children } = props;

  return (
    <Button
      startIcon={startIcon}
      onClick={onClick}
      className="my-2 rounded-5 btn_primary"
      sx={{ background: "#242424" }}
      variant="contained"
      color="primary"
      fullWidth
    >
      <text className="d-none d-md-block">{label}</text>
      {children !== undefined && <>{children}</>}
    </Button>
  );
}

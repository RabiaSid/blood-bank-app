import React from 'react'
import { TextField } from "@mui/material";
import { ReactNode } from "react";

type InputProps = {
  placeholder?: string;
  label?: string;
  type?: string;
  select?: any;
  SelectProps?: any;
  name?: any;
  value?: string;
  onChange?: (...args: any[]) => any;
  required?: any;
  children?: ReactNode;
};

export default function InputField(props: InputProps) {
  const {
    placeholder,
    label,
    type,
    select,
    SelectProps,
    name,
    value,
    onChange,
    required,
    children,
  } = props;

  return (
    <TextField
      label={label}
      fullWidth
      type={type}
      select={select}
      SelectProps={SelectProps}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      margin="normal"
      className="Mui_Input"
      color="success"
      required={required}
    >
      {children}
    </TextField>
  );
}

import React from 'react'
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type checkProps = {
  id?: any;
  name?: any;
  value?: string | number;
  label: string;
  onChange?: (...args: any[]) => any;
  checked?: any;
};

export default function CheckboxLabels(props: checkProps) {
  const { id, name, value, label, checked, onChange } = props;

  return (
    <FormControlLabel
      className="ms-1"
      id={id}
      name={name}
      value={value}
      control={<Checkbox defaultChecked />}
      checked={checked}
      onChange={onChange}
      label={label}
    />
  );
}

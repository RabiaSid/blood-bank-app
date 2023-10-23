import React from 'react'

type propsType = {
  label?: any;
  onChange?: (...args: any[]) => any;
  type?: string;
  value?: any;
};

export default function DisableInput(props: propsType) {
  const { label, onChange, type, value } = props;
  return (
    <input
      className="p-3 border border-primary border-2 
      form-control border-success w-100 outline-0 
      rounded my-1 bg-light"
      placeholder={label}
      value={value}
      onChange={onChange}
      type={type ?? "text"}
      disabled={true}
    />
  );
}

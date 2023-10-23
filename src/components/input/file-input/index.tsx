import React from 'react'

type FileUploadProps = {
  onChange?: (...args: any[]) => any;
  value?: any;
};

export default function FileUpload(props: FileUploadProps) {
  const { onChange, value } = props;

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file && onChange) {
  //     onChange(file); // Pass the selected file to the parent component
  //   }
  // };
  return (
    <>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        accept=".svg, .png, .jpg, .jpeg, .gif"
        onChange={onChange}
        value={value}
      />
    </>
  );
}

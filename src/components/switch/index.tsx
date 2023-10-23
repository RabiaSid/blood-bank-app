import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  return (
    <FormGroup className='ms-2'>
      <FormControlLabel control={<Switch />} label="agree*" />
    </FormGroup>
  );
}

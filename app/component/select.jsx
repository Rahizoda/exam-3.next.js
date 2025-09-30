"use client"

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Language</InputLabel>
      <Select
        className='!text-black !dark:text-white'
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value="">
        </MenuItem>
        <MenuItem value="TJ">TJ</MenuItem>
        <MenuItem value="EN">EN</MenuItem>
        <MenuItem value="RU">RU</MenuItem>
      </Select>
    </FormControl>
  );
}

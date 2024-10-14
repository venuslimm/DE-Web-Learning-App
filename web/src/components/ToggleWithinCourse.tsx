import React from 'react'
import { useRouter } from 'next/navigation';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { NavListType } from '../types';

const ToggleWithinCourse = ({ nav, currentPageKey }: { nav: NavListType, currentPageKey: string }) => {
  const router = useRouter();
  const [selectedNav, setSelectedNav] = React.useState(nav[currentPageKey] as string);

  const handleChange = (event: SelectChangeEvent) => {
    const page = event.target.value;
    setSelectedNav(page);
    console.log('redirect to', page);
    router.push(page);
  };
  
  return (
    <FormControl sx={{ width: '50vh' }}>
      <InputLabel id="demo-simple-select-helper-label">Course Nav</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={selectedNav}
        label="Course Nav"
        onChange={handleChange}
      >
        {Object.keys(nav).map((key) => (
          <MenuItem key={key} value={nav[key]}>{key}</MenuItem>        
        ))}
      </Select>
    </FormControl>
  )
}

export default ToggleWithinCourse;

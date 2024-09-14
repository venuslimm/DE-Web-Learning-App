import React from 'react'
import { useRouter } from 'next/navigation';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// TODO: extract out
interface NavType {
  [key: string]: string | number;
}

interface GuideNavDropdownProps {
  [key: string]: string | number;
}

const GuideNavDropdown = ({ nav }: { nav: NavType }) => {
  const router = useRouter();
  const [selectedNav, setSelectedNav] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const page = event.target.value;
    setSelectedNav(page);
    console.log('redirect to', page);
    router.push(page);
  };
  
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id="demo-simple-select-helper-label">Guide Nav</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={selectedNav}
        label="Nav"
        onChange={handleChange}
      >
        {Object.keys(nav).map((key) => (
          <MenuItem key={key} value={nav[key]}>{key}</MenuItem>        
        ))}
      </Select>
    </FormControl>
  )
}

export default GuideNavDropdown;

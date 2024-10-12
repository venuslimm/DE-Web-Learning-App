import React from 'react'
import { Card, CardHeader, Collapse, IconButton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ProgramOutputBoxProps {
  content: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const ProgramOutputBox: React.FC<ProgramOutputBoxProps> = ({ content, open, setOpen }) => {
  const handleCardToggle = () => {
    setOpen(!open);
  };

  return (
    <Card className='my-2'>
      <CardHeader
        className='cursor-pointer border'
        onClick={handleCardToggle}
        title='Program output'
        titleTypographyProps={{ variant: 'body1' }}
        action={
          <IconButton aria-label='expand' size='small'>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        } />
      <Collapse in={open}>
        <iframe className='border' srcDoc={content} width="100%" height="500pt" />
      </Collapse>
    </Card>
  )
}

export default ProgramOutputBox;

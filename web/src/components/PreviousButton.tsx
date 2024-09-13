import React from 'react'
import { Button } from '@mui/material';
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';

// TODO: extract out
interface PreviousButtonProps {
  onClickFn: () => void;
}

const PreviousButton: React.FC<PreviousButtonProps> = ({ onClickFn }) => {
  return (
    <Button variant='outlined' className='ml-auto' onClick={onClickFn}>
      <ArrowBackwardIcon />
    </Button>
  )
}

export default PreviousButton;
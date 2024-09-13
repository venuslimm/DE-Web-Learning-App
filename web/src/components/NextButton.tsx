import React from 'react'
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// TODO: extract out
interface NextButtonProps {
  onClickFn: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClickFn }) => {
  return (
    <Button variant='outlined' className='ml-auto' onClick={onClickFn}>
      <ArrowForwardIcon />
    </Button>
  )
}

export default NextButton
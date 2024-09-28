import React from 'react'
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ButtonComponentProps } from '@/types';

const NextButton: React.FC<ButtonComponentProps> = ({ onClickFn }) => {
  return (
    <Button variant='outlined' className='ml-auto' onClick={onClickFn}>
      <ArrowForwardIcon />
    </Button>
  )
}

export default NextButton
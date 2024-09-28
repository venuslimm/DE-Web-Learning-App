import React from 'react'
import { Button } from '@mui/material';
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';
import { ButtonComponentProps } from '@/types';

const PreviousButton: React.FC<ButtonComponentProps> = ({ onClickFn }) => {
  return (
    <Button variant='outlined' className='ml-auto' onClick={onClickFn}>
      <ArrowBackwardIcon />
    </Button>
  )
}

export default PreviousButton;
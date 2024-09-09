import React from 'react'
import { Button } from '@mui/material';

// TODO: extract out
interface NextButtonProps {
  onClickFn: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClickFn }) => {
  return (
    <div className='mt-1 flex'>
      <Button variant='contained' className='ml-auto' onClick={onClickFn()}>
        Next
      </Button>
    </div>
  )
}

export default NextButton
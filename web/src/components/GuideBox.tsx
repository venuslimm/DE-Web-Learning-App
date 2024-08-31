import React from 'react'

interface GuideBoxProps {
  text: string;
}

const GuideBox: React.FC<GuideBoxProps> = ({ text }) => {
  return (
    <div className='h-64 overflow-y-auto'>
      {text}
    </div>
  )
}

export default GuideBox;

import React from 'react'

// TODO: extract out
interface GuideBoxProps {
  url: string;
}

// Alternative: react-pdf-viewer (paid)
// Free but no highlighting: @simplepdf/react-embed-pdf

// TODO: change src

const GuideBox: React.FC<GuideBoxProps> = ({ url }) => {
  return (
    <div className='h-full'>
      <iframe
        src={url}
        style={{
          height: "100%",
          width: "100%",
          border: "none"
        }}
      />
    </div>
  )
}

export default GuideBox;

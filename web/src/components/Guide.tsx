import React from 'react'
import { Box } from '@mui/material';
import { UrlProps } from '@/types';

// Alternative for PDF viewer: react-pdf-viewer (paid)
// Free but no highlighting: @simplepdf/react-embed-pdf

const Guide: React.FC<UrlProps> = ({ url }) => {
  return (
    <Box className='h-full'>
      <iframe
        src={url}
        style={{
          height: "100%",
          width: "100%",
          border: "none"
        }}
      />
    </Box>
  )
}

export default Guide;

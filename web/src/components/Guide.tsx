'use client';

import React, { useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material';
import { UrlProps } from '@/types';

import TextEditor from './text-editor/TextEditor';

// Alternative for PDF viewer: react-pdf-viewer (paid)
// Free but no highlighting: @simplepdf/react-embed-pdf

const Guide: React.FC<UrlProps> = ({ url }) => {
  async function getJsonContents() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
  }

  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const jsonContent = await getJsonContents();
      setContent(jsonContent);
    };

    fetchContent();
  });

  return (
    <Box sx={{ height: '100%' }}>
      {
        content 
          ? (
            <TextEditor
              content={content}
              isEditable={true}
              isExportableToJson={false}
              isExportableToHtml={true} 
              />
          ) : (
            <Box sx={{ border: 1, padding: 1, marginY: 1, height: '99%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          )
      }
      </Box>
  )
}

export default Guide;

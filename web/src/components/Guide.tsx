'use client';

import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import { UrlProps } from '@/types';
import { Editor, EditorContent } from '@tiptap/react'
import Image from '@tiptap/extension-image';

// import data from '../../public/resources/intro_to_etl/content.json';
import StarterKit from '@tiptap/starter-kit';


// Alternative for PDF viewer: react-pdf-viewer (paid)
// Free but no highlighting: @simplepdf/react-embed-pdf

const Guide: React.FC<UrlProps> = ({ url }) => {
  const [editor, setEditor] = useState<Editor | null>(null);

  async function getJsonContents() {
    const response = await fetch('/resources/intro_to_etl/introduction.json');
    const json = await response.json();
    console.log(json);
    return json;
  }

  useEffect(() => {
    const initializeEditor = async () => {
      const newEditor = new Editor({
        extensions: [
          StarterKit,
          Image.configure({
            inline: true,
          }),
        ],
        content: await getJsonContents(),
        editable: false,
      });
      setEditor(newEditor);

      return () => {
        newEditor.destroy();
      };
    };

    initializeEditor();
  }, []);

  return (
    <Box className='h-full'>
      {/* <iframe
        src={url}
        style={{
          height: "100%",
          width: "100%",
          border: "none"
        }}
      /> */}
      <Box sx={{ border: 1, height: '100%', overflowY: 'auto', padding: 5 }}>
        {editor ? (<EditorContent editor={editor} />) : <p>Cannot load guide</p>}
      </Box>
    </Box>
  )
}

export default Guide;

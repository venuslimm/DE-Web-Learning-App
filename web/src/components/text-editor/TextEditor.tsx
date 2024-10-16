'use client';

import React, { useEffect } from 'react';

import { Box, IconButton, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AddPhotoAlternate, FileDownload } from '@mui/icons-material';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageResize from 'tiptap-extension-resize-image';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link'

import Highlighter from './Highlighter';

interface TextEditorProps {
  content?: any;   // TODO: Change to JSON
  isEditable: boolean;
  isExportableToJson: boolean;
  isExportableToHtml: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({ content, isEditable, isExportableToJson, isExportableToHtml }) => {
  const theme = useTheme();

  const editor = useEditor({
    extensions: [
      StarterKit,
      ImageResize,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
    ],
    content: content,
    editable: isEditable,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) {
    return null;
  }
  
  const downloadFile = (content: string, fileName: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };  

  // https://tiptap.dev/docs/guides/output-json-html
  const exportToJson = () => {
    const json = editor.getJSON();
    downloadFile(JSON.stringify(json, null, 2), 'content.json', 'application/json');
  }

  const exportToHtml = () => {
    const html = editor.getHTML();
    downloadFile(html, 'content.html', 'text/html');
  }

  // Also has export to doc but its paid

  // https://tiptap.dev/docs/examples/basics/images
  const addImage = () => {
    // Open file explorer to select image
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.click()
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) {
        return
      }
      const reader = new FileReader()
      reader.onload = () => {
        const url = reader.result as string
        editor.chain().focus().setImage({ src: url }).run()
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Box sx={{ height: '100%' }}>
      <Box 
        bgcolor={theme.palette.primary[50]} 
        sx={{ height: '7%', alignItems: 'center', display: 'flex' }}
        my={1}
        >
        { 
          isEditable ? (
            <>
              <Highlighter 
                highlighterColor={theme.palette.primary.light} 
                buttonHoverColor={theme.palette.primary.main} 
                editor={editor} 
                />
              <Highlighter 
                highlighterColor={theme.palette.secondary.light} 
                buttonHoverColor={theme.palette.secondary.main} 
                editor={editor} 
                />
              <IconButton onClick={addImage} color="primary" sx={{ mx: 1 }}>
                <AddPhotoAlternate />
              </IconButton>
            </>
          ) : <></>
        }
        {
          isExportableToJson ? (
            <Tooltip title="Export to JSON">
              <IconButton onClick={exportToJson} color="primary" sx={{ mx: 1 }}>
                <FileDownload />
              </IconButton>
            </Tooltip>
          ) : <></>
        }
        {
          isExportableToHtml ? (
            <Tooltip title="Export to HTML">
              <IconButton onClick={exportToHtml} color="primary" sx={{ mx: 1 }}>
                <FileDownload />
              </IconButton>
            </Tooltip>
          ) : <></>
        }
      </Box>
      <Box sx={{ border: 1, overflow: 'auto', height: '90%' }}>
        <EditorContent editor={editor} />
      </Box>
    </Box>
  )
}

export default TextEditor;

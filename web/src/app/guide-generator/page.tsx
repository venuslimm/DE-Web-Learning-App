'use client'

import React from 'react'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Box, Button } from '@mui/material'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image';
import Highlight from '@tiptap/extension-highlight'
import { useTheme } from '@mui/material/styles';
import Highlighter from './Highlighter'

const page = () => {
  const theme = useTheme();

  const editor = useEditor({
    extensions: [
      StarterKit, 
      Image,  // TODO: Set default size for image
      ImageResize,
      Highlight.configure({ multicolor: true }),
    ],
    // content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
  });

  if (!editor) {
    return null;
  }

  // https://tiptap.dev/docs/guides/output-json-html
  const exportToJson = () => {
    const json = editor.getJSON()
    const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'content.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportToHtml = () => {
    if (!editor) {
      return;
    }
    const html = editor.getHTML()
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'content.html'
    a.click()
    URL.revokeObjectURL(url)
  }

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
    <Box>
      <Box bgcolor={theme.palette.primary[50]} my={1}>
        <Highlighter 
          highlighterColor={theme.palette.primary[200]} 
          buttonHoverColor={theme.palette.primary.main} 
          editor={editor} 
          />
        <Highlighter 
          highlighterColor={theme.palette.secondary[200]} 
          buttonHoverColor={theme.palette.secondary.main} 
          editor={editor} 
          />
        <Button
          onClick={() => editor.chain().focus().unsetHighlight().run()}
          disabled={!editor.isActive('highlight')}
        >
          Unset highlight
        </Button>
        <Button onClick={exportToJson}>Export to JSON</Button>
        <Button onClick={exportToHtml}>Export to HTML</Button>
        <Button onClick={addImage}>Add image from URL</Button>
      </Box>
      <Box sx={{ border: 1, height: '100%', overflowY: 'auto', padding: 1 }}>
        <EditorContent editor={editor} />
      </Box>
    </Box>
  )
}

export default page;

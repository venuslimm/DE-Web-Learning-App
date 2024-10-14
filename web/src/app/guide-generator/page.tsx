'use client'

import React from 'react'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Box, Button } from '@mui/material'
import Image from '@tiptap/extension-image'

const page = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: '<p>Hello World! 🌎️</p>',
  })

  // https://tiptap.dev/docs/guides/output-json-html
  const exportToJson = () => {
    if (!editor) {
      return;
    }
    const json = editor.getJSON()
    const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'content.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  // https://tiptap.dev/docs/examples/basics/images
  const addImage = () => {
    if (!editor) {
      return;
    }
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
      <Button onClick={exportToJson}>Export to JSON</Button>
      <Button onClick={addImage}>Add image from URL</Button>
      <EditorContent editor={editor} />
    </Box>
  )
}

export default page;

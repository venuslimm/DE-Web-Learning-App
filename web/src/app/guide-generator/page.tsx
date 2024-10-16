import TextEditor from '@/components/text-editor/TextEditor';
import React from 'react'

const GuideGenerator = () => {
  return (
    <TextEditor
      isEditable={true}
      isExportableToJson={true}
      isExportableToHtml={true}
    />
  )
}

export default GuideGenerator;

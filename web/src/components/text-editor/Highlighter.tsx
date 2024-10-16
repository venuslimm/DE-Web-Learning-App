import React from 'react';
import { IconButton } from '@mui/material';

interface HighlighterProps {
  highlighterColor: string;
  buttonHoverColor: string;
  editor: any; // TODO: You can replace 'any' with the specific type if known
}

const Highlighter: React.FC<HighlighterProps> = ({ highlighterColor, buttonHoverColor, editor }) => {
  return (
    <IconButton
        sx={{
          backgroundColor: highlighterColor,
          width: '16px',
          height: '16px',
          '&:hover': {
            backgroundColor: buttonHoverColor,
          },
          mx: 2,
        }}
        onClick={() => editor.chain().focus().toggleHighlight({ color: highlighterColor }).run()}
      />
  )
}

export default Highlighter;

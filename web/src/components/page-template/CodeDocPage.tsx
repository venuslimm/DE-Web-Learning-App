import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { getExecOutput } from '@/api/DataVizApi';
import Chatbot from '@/components/Chatbot';
import CourseNavBar from '@/components/CourseNavBar';
import Guide from '@/components/Guide';
import { nav } from '@/constants';
import ProgramOutputBox from '@/components/ProgramOutputBox';

interface CodeDocPageProps {
  html: string;
  setHtml: (value: string) => void;
  code: string;
  setCode: (value: string) => void;
  url: string;
}

const CodeDocPage: React.FC<CodeDocPageProps> = ({ html, setHtml, code, setCode, url }) => {
  const [content, setContent] = useState(html);
  const [isExecutable, setIsExecutable] = useState(true);
  const [outputOpen, setOutputOpen] = useState(false);

  useEffect(() => {
    // Update the content state when the html prop changes
    setContent(html);
  }, [html]);

  const execCode = async () => {
    console.log(code);
    setIsExecutable(false);
    const output = await getExecOutput(code);
    console.log(output)
    if (output.length === 0) {
      setHtml('Your code execution failed. Check your code again.');
    } else {
      setHtml(output);
    }
    setOutputOpen(true);
    setIsExecutable(true);
  };

  return (
    <Box display="flex" flexDirection="column">
      <CourseNavBar navList={nav} />
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" width="50%" mr={1}>
          <Box display="flex" justifyContent="center" bgcolor="#f5f5f5">
            <Button 
              sx={{ width: '50px', py: 0, pr: 5, ml: 'auto' }} 
              onClick={execCode} 
              disabled={!isExecutable}
            >
              { isExecutable ? 'Execute' : 'Executing' }
            </Button>
          </Box>
          <CodeMirror
            value={code}
            extensions={[python()]}
            onChange={(update) => {
              setCode(update);
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="50%" ml={1}>
          <ProgramOutputBox 
            content={content.startsWith('<html>') 
              ? content 
              : `<p style="font-family: sans-serif; font-size: 14px;">${content}</p>`            } 
            open={outputOpen} 
            setOpen={setOutputOpen} 
          />
          <Box height="1300px">
            <Guide url={url} />
          </Box>
          <Chatbot />
        </Box>
      </Box>
    </Box>
  )
}

export default CodeDocPage
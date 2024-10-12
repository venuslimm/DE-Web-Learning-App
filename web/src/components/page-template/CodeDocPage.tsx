import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@mui/material';
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
    <div className='flex flex-col'>
      <CourseNavBar
        navList={nav}
        />
      <div className='flex flex-row'>
        <div className='flex flex-col w-[50%] mr-1'>
          <div className='flex justify-center bg-[#f5f5f5]'>
            <Button 
              className='w-[50px] py-0 pr-5 ml-auto' 
              onClick={execCode} 
              disabled={!isExecutable}
            >
              { isExecutable ? 'Execute' : 'Executing' }
            </Button>
          </div>
          <CodeMirror
            value={code}
            extensions={[python()]}
            onChange={(update) => {
              console.log(update);
              setCode(update);
            }}
          />
        </div>
        <div className='flex flex-col w-[50%] ml-1'>
          <ProgramOutputBox 
            content={content.startsWith('<html>') 
              ? content 
              : `<p style="font-family: Arial, Helvetica, sans-serif; font-size: 16px;">${content}</p>`
            } 
            open={outputOpen} 
            setOpen={setOutputOpen} 
          />
          <div className='h-[1000px]'>
            <Guide url={url} />
          </div>
          <Chatbot />
        </div>
      </div>
    </div>
  )
}

export default CodeDocPage
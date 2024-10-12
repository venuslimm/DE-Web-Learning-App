import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { getExecOutput } from '@/api/DataVizApi';
import Chatbot from '@/components/Chatbot';
import CourseNavBar from '@/components/CourseNavBar';
import Guide from '@/components/Guide';
import { nav } from '@/constants';

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
      setHtml('<p style="color: red;">Your code execution failed. Check your code again.</p>');
    } else {
      setHtml(output);
    }
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
            <Button className='w-[50px] py-0 pr-5 ml-auto' onClick={execCode} disabled={!isExecutable}>Execute</Button>
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
          <div className='h-[1000px]'>
            <Guide url={url} />
          </div>
          <Chatbot />
          <iframe className='border' srcDoc={content} width="100%" height="500pt"></iframe>
        </div>
      </div>
    </div>
  )
}

export default CodeDocPage
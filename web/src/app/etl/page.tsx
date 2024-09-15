'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import GuideBox from '@/components/GuideBox';
import CourseNav from '@/components/CourseNav';
import { verifyGuideCompletion } from '@/api/CourseApi';
import Chatbot from '@/components/Chatbot';
  import { nav } from '../../constants';
import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';

// TODO: Change page name and link
const ETLPage = () => {
  const router = useRouter();

  const guides = [
    {'name': 'Batch Pipeline', 'url': './resources/tl_guide.pdf'}, 
    {'name': 'Stream Pipeline', 'url': './resources/streaming_guide.pdf'}
  ];

  const [selectedGuide, setSelectedGuide] = useState(0);
  const [selectedGuideUrl, setSelectedGuideUrl] = useState(guides[0]['url']);
  
  useEffect(() => {
  }, [selectedGuideUrl]);

  const previousButtonClicked = () => {
    // TODO:  change name
    router.push('/extract');
  };

  const nextButtonClicked = async() => {
    // TODO: Get course ID from URL
    const status = await verifyGuideCompletion('1');
    if (status) {
      // TODO: redirect to next page
      window.alert('Guide completed! Redirecting to the next page...');
      router.push('/data-viz');
    } else {
      window.alert('Guide not completed. Please complete the guide before proceeding.');
    }
  };
  
  const handleGuideChange = (event: SelectChangeEvent<number>) => {
    setSelectedGuide(Number(event.target.value));
    setSelectedGuideUrl(guides[Number(event.target.value)]['url']);
  }

  return (
    <div>
      <CourseNav
        previousButtonClicked={previousButtonClicked}
        nextButtonClicked={nextButtonClicked}
        navList={nav}
        />
      <div className='flex flex-row h-[550px]'>
        <div className='w-2/3 h-full'>
          <iframe
            src='http://localhost:6789'
            title='ETL'
            width='100%'
            height='550px'
            style={{ border: 'none' }}
          />
        </div>
        <div className='w-1/3 ml-1 border h-full flex flex-col'>
          <div className='flex flex-row w-full'>
            <Select
              value={selectedGuide}
              onChange={handleGuideChange}
              className='flex-grow'
            >
              {guides.map((guide, index) => (
                <MenuItem key={index} value={index}>{guide.name}</MenuItem>
              ))}
            </Select>
            {selectedGuide === 0 && 
              <a href="./resources/singapore.csv" download>
                  <Button 
                    className='h-[100%] ml-2'
                    variant='contained'
                  >
                    Download dataset for this exercise
                  </Button>
              </a>
            }
          </div>
          <div className='flex-grow border'>
            <GuideBox url={selectedGuideUrl} />
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default ETLPage;

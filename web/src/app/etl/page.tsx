'use client';
import React from 'react';
import { useRouter } from 'next/navigation'
import GuideBox from '@/components/GuideBox';
import CourseNav from '@/components/CourseNav';
import { verifyGuideCompletion } from '@/api/CourseApi';
import Chatbot from '@/components/Chatbot';
import { nav } from '../../constants';

// TODO: Change page name and link
const ETLPage = () => {
  const router = useRouter();

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
          <div className='flex-grow border'>
            <GuideBox url={"./resources/tl_guide.pdf"} />
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default ETLPage;

'use client';
import React from 'react';
import GuideBox from '@/components/GuideBox';
import GuideNavDropdown from '@/components/GuideNavDropdown';
import NextButton from '@/components/NextButton';

import { verifyGuideCompletion } from '@/api/CourseApi';

// TODO: Change page name and link
const ETLPage = () => {
  // TODO: Get from db and change the redirect links
  const nav = {
    'Overview': '/doc/1',  // maybe pdf doc only
    'ETL: E': '/data-viz',        // code+pdf doc
    'ETL: TL': '/etl',    // docker container + pdf doc
    'Visualisation': '/data-viz',   // code+pdf doc
    'Summary': '/doc/1',        // maybe pdf doc only 
  };

  const nextButtonClicked = async() => {
    // TODO: Get course ID from URL
    const status = await verifyGuideCompletion('1');
    if (status) {
      // TODO: redirect to next page
      // window.alert('Guide completed! Redirecting to the next page...');
      console.log('Guide completed! Redirecting to the next page...');
    } else {
      // window.alert('Guide not completed. Please complete the guide before proceeding.');
      console.log('Guide not completed. Please complete the guide before proceeding.');
    }
  };

  return (
    <div>
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
          <div className='border'>
            <GuideNavDropdown nav={nav} />
          </div>
          <div className='flex-grow border'>
            <GuideBox url={"/resources/tl_guide.pdf"} />
          </div>
        </div>
      </div>
      <NextButton onClickFn={nextButtonClicked} />
    </div>
  );
};

export default ETLPage;

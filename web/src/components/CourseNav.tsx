import React from 'react'

import GuideNavDropdown from '@/components/GuideNavDropdown';
import NextButton from '@/components/NextButton';
import PreviousButton from '@/components/PreviousButton';

// TODO fix type
// TODO fix the way it detects the next and prev page based on its current page using index
const CourseNav = ({ previousButtonClicked, nextButtonClicked, navList }: { previousButtonClicked?: any, nextButtonClicked?: any, navList: any }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-row mt-2 mb-3 w-50'>
        {previousButtonClicked ? <PreviousButton onClickFn={previousButtonClicked} /> : <></>}
        <GuideNavDropdown nav={navList} />
        {nextButtonClicked ? <NextButton onClickFn={nextButtonClicked} /> : <></>}
      </div>
    </div>
  )
}

export default CourseNav
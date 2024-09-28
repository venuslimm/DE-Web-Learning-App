import React from 'react'
import { useRouter, usePathname } from 'next/navigation';
import ToggleGuide from '@/components/ToggleGuide';
import NextButton from '@/components/NextButton';
import PreviousButton from '@/components/PreviousButton';

interface CourseNavBarProps {
  previousButtonClicked?: () => void;
  nextButtonClicked?: () => void;
  navList: any;
}

const CourseNavBar: React.FC<CourseNavBarProps> = ({
  previousButtonClicked,
  nextButtonClicked,
  navList,
}) => {
  const router = useRouter();
  const currentPage = usePathname();
  const navListArr = Object.entries(navList);

  const isFirstPage = currentPage === navListArr[0][1];
  const isLastPage = currentPage === navListArr[navListArr.length - 1][1];

  const currentIndex = navListArr.findIndex(([key, value]) => value === currentPage);
  const currentPageKey = navListArr[currentIndex][0];

  // Declare previousButtonClicked if not passed as prop to simply redirect to the previous page
  if (!previousButtonClicked) {
    previousButtonClicked = () => {
      const previousPage: string = navListArr[currentIndex - 1][1] as string;
      router.push(previousPage);
    };
  }

  // Declare nextButtonClicked if not passed as prop to simply redirect to the next page
  if (!nextButtonClicked) {
    nextButtonClicked = () => {
      const nextPage: string = navListArr[currentIndex + 1][1] as string;
      router.push(nextPage);
    };
  }
  
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-row mt-2 mb-3 w-50'>
        {isFirstPage ? <></> : <PreviousButton onClickFn={previousButtonClicked} />}
        <ToggleGuide nav={navList} currentPageKey={currentPageKey} />
        {isLastPage ? <></> : <NextButton onClickFn={nextButtonClicked} />}
      </div>
    </div>
  )
}

export default CourseNavBar;

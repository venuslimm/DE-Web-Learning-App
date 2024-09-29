'use client';

import Guide from '@/components/Guide'
import CourseNavBar from '../CourseNavBar';
import { UrlProps } from '@/types';
import { nav } from '@/constants';
import Chatbot from '../Chatbot';

const DocPage: React.FC<UrlProps> = ({ url }) => {
  return (
    <div>
      <CourseNavBar navList={nav} />
      <div className='h-[580px]'>
        <Guide url={url} />
      </div>
      <Chatbot />
    </div>
  )
}

export default DocPage;

'use client';

import { Box } from '@mui/material';
import Guide from '@/components/Guide'
import CourseNavBar from '../CourseNavBar';
import { UrlProps } from '@/types';
import { nav } from '@/constants';
import Chatbot from '../Chatbot';

const DocPage: React.FC<UrlProps> = ({ url }) => {
  return (
    <Box>
      <CourseNavBar navList={nav} />
      <Box className='h-[580px]'>
        <Guide url={url} />
      </Box>
      <Chatbot />
    </Box>
  )
}

export default DocPage;

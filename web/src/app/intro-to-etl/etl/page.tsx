'use client';
import React, { useState, useEffect } from 'react';
import Guide from '@/components/Guide';
import CourseNavBar from '@/components/CourseNavBar';
// import { verifyGuideCompletion } from '@/api/CourseApi';
import Chatbot from '@/components/Chatbot';
  import { nav } from '../../../constants';
import { Box, Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { introToEtlDocs } from '../../../constants';

const ETLPracticalPage = () => {
  const guides = [
    {'name': 'Batch Pipeline', 'url': introToEtlDocs['Batch Guide'] }, 
    {'name': 'Stream Pipeline', 'url': introToEtlDocs['Stream Guide'] }
  ];

  const [selectedGuide, setSelectedGuide] = useState(0);
  const [selectedGuideUrl, setSelectedGuideUrl] = useState(guides[0]['url']);
  
  useEffect(() => {
  }, [selectedGuideUrl]);

  // const nextButtonClicked = async() => {
  //   // TODO: Get course ID from URL
  //   // const status = await verifyGuideCompletion('1');
  //   // if (status) {
  //   //   window.alert('Guide completed! Redirecting to the next page...');
  //   //   router.push('/data-viz');
  //   // } else {
  //   //   window.alert('Guide not completed. Please complete the guide before proceeding.');
  //   // }
  //   router.push('/data-viz');
  // };
  
  const handleGuideChange = (event: SelectChangeEvent<number>) => {
    setSelectedGuide(Number(event.target.value));
    setSelectedGuideUrl(guides[Number(event.target.value)]['url']);
  };

  return (
    <Box>
      <CourseNavBar navList={nav} />
      <Box width="100%" display="flex" flexDirection="row" height="550px">
        <Box width="65%" height="100%">
          <iframe
            src={`http://localhost:${process.env.MAGEAI_PORT || 6789}`}
            title="ETL"
            width="100%"
            height="550px"
            style={{ border: '1px solid black' }}
          />
        </Box>
        <Box 
          width="35%" 
          ml={1} 
          height="100%" 
          display="flex" 
          flexDirection="column">
          <Box 
            display="flex" 
            flexDirection="row" 
            width="100%" 
            height="9%"
            >
            <Select
              value={selectedGuide}
              onChange={handleGuideChange}
              sx={{ height: '100%', flex: 5 }}
            >
              {guides.map((guide, index) => (
                <MenuItem key={index} value={index}>{guide.name}</MenuItem>
              ))}
            </Select>
            {selectedGuide === 0 && (
              <a href={introToEtlDocs["Batch Dataset"]} download>
                <Button
                  sx={{ height: '100%', flex: 1, ml: 1 }}
                  variant="contained"
                >
                  <DownloadIcon />
                </Button>
              </a>
            )}
          </Box>
          <Box height={'90%'}>
            <Guide url={selectedGuideUrl} />
          </Box>
        </Box>
      </Box>
      <Chatbot />
    </Box>
  );
};

export default ETLPracticalPage;

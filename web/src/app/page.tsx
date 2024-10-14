'use client';
import React, { useRef } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import CourseCatalogue from '../components/CourseCatalogue';

export default function Home() {
  const nextComponentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const scrollToNextComponent = () => {
    if (nextComponentRef.current) {
      nextComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          variant={isSmallScreen ? 'h3' : 'h2'}
          component="h1"
          sx={{ fontWeight: "bold", width: '75%' }}
        >
          Learn data engineering skills with our free courses now! 📚
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={scrollToNextComponent}
          sx={{ mt: 4 }}
        >
          Get Started 🚀
        </Button>
      </Box>

      <Box
        id="course-catalogue"
        ref={nextComponentRef}
        minHeight={'100vh'}
        pt={'5rem'}
        pb={'2rem'}
      >
        <CourseCatalogue />
      </Box>
    </>
  );
}
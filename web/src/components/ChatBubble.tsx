import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const ChatBubble = ({ message, isSender }: { message: string, isSender: boolean }) => {
  return (
    <Box
      display="flex"
      justifyContent={isSender ? 'flex-end' : 'flex-start'}
      mb={2}
    >
      <Paper
        elevation={3}
        style={{
          backgroundColor: isSender ? '#007bff' : '#f1f0f0',
          color: isSender ? 'white' : 'black',
          padding: '10px 20px',
          margin: '0 10px',
          borderRadius: '20px',
          maxWidth: '60%',
        }}
      >
        <Typography variant="body1">
        { message.split('\n').map((line, index) => (
          line.trim() === "" 
            ? <br key={index} /> 
            : <p key={index}><ReactMarkdown>{line}</ReactMarkdown></p>
        )) }
        </Typography>
      </Paper>
    </Box>
  );
};

export default ChatBubble;

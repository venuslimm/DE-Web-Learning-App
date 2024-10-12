'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  TextField,
  Collapse,
  Card,
  CardHeader,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import ChatBubble from './ChatBubble';
import { getChatbotResponse } from '../api/ChatbotApi';
import { ChatbotMessage, ChatbotConvo } from '@/types';

function Chatbot() {
  const [messages, setMessages] = useState<ChatbotConvo>(
    []
  );
  const [input, setInput] = useState('');
  const [isSendable, setIsSendable] = useState(true);
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the messages container
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleCardToggle = () => {
    setOpen(!open);
  };

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    setIsSendable(false);
    setInput('');

    const newMessage: ChatbotMessage = { role: 'user', content: input.trim() };
    let updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    try {
      const botResponse = await getChatbotResponse(updatedMessages);
      updatedMessages[updatedMessages.length - 1].isStatusUp = true;
      updatedMessages = [...updatedMessages, { role: 'assistant', content: botResponse, isStatusUp: true }];
    } catch (error) {
      console.error('Error sending message:', error);
      updatedMessages[updatedMessages.length - 1].isStatusUp = false;
      updatedMessages = [...updatedMessages, { role: 'assistant', content: 'Error, unable to get a response.', isStatusUp: false }];
    }
    setIsSendable(true);
    setMessages(updatedMessages);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className='my-2'>
      <CardHeader
        className='cursor-pointer border'
        onClick={handleCardToggle}
        title='Any questions? Ask DEBot!'
        titleTypographyProps={{ variant: 'body1' }}
        action={
          <IconButton aria-label='expand' size='small'>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        } />
      <Collapse in={open}>
        <div className='flex flex-col w-full max-h-[400px] overflow-y-auto' ref={messagesContainerRef}>
          <div className='w-full'>
            {messages.map((message, index) => (
              <div key={index} className='message'>
                {/* TODO: Fix or change markdown (doesnt work for tabbed contents) */}
                {message.role === 'assistant' ? (
                  <ChatBubble message={message.content} isSender={false} />
                ) : (
                  <ChatBubble message={message.content} isSender={true} />
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className='flex flex-row mt-auto sticky bottom-0 bg-white'>
            <TextField
              className='flex-grow'
              id='filled-multiline-flexible'
              label='Send a question here...'
              multiline
              maxRows={4}
              variant='filled'
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              required={true}
              inputProps={{ maxLength: 300 }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={handleSendMessage} disabled={!isSendable}>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>
        </div>
      </Collapse>
    </Card>
  );
}

export default Chatbot;

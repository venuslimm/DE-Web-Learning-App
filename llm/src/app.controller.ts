import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ChatbotConvo } from './app.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('chatbot')
  async askChatbot(@Body('convo') convo: ChatbotConvo) {
    if (!convo || convo.length === 0) {
      console.error('Invalid prompt:', convo);
      throw new HttpException('Invalid prompt', HttpStatus.BAD_REQUEST);
    }

    const mostRecentPrompt = convo[convo.length - 1]?.content;

    if (mostRecentPrompt.length === 0 || mostRecentPrompt.length > 300) {
      console.error('Invalid prompt length:', mostRecentPrompt);
      throw new HttpException('Invalid prompt length', HttpStatus.BAD_REQUEST);
    }

    const response = await this.appService.generateChatbotResponse(convo);
    return { response };
  }
}

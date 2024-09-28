import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('chatbot')
  async askChatbot(@Body('prompt') prompt: string) {
    if (prompt.length === 0 || prompt.length > 300) {
      throw new HttpException('Invalid prompt length', HttpStatus.BAD_REQUEST);
    }

    const response = await this.appService.generateChatbotResponse(prompt);
    return { response };
  }
}

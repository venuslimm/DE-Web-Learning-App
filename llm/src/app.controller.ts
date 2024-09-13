import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('chatbot')
  async askChatbot(@Body('prompt') prompt: string) {
    const response = await this.appService.generateChatbotResponse(prompt);
    return { response };
  }
}

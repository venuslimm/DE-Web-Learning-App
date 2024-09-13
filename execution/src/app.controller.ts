import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('execute')
  execute(@Body('script') script: string): any {
    console.log('Executing script:', script);
    try {
      return this.appService.execute(script);
    } catch (error) {
      return [error];
    }
  }
}

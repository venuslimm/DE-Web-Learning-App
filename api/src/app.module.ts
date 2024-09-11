import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseService } from './course.service';
import { PrismaService } from './prisma.service';
import { ChatbotService } from './chatbot.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CourseService, PrismaService, ChatbotService],
})
export class AppModule {}

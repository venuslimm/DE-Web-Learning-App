import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { course } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('course/:id')
  async getCourseById(@Param('id') id: string): Promise<course> {
    const course = await this.appService.course(Number(id));
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course;
  }

  @Get('course')
  async getCourses(): Promise<course[]> {
    const courses = await this.appService.courses();
    if (courses.length === 0) {
      throw new NotFoundException('No courses found');
    }
    return courses;
  }

  @Get('course/verify/:id')
  async verifyGuideCompletion(@Param('id') id: string): Promise<boolean> {
    if (!id) {
      throw new NotFoundException('Course id is required');
    } else if (Number(id) !== 1) {
      // todo: ID is hardcoded for now
      throw new NotFoundException('Course id is invalid');
    }

    const status = await this.appService.verifyGuideCompletion(Number(id));
    if (!status) {
      throw new NotFoundException(
        `Unable to verify completion for course with id ${id} not found`,
      );
    }
    return status;
  }
}

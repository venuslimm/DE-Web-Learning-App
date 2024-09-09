import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CourseService } from './course.service';
import { course } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly courseService: CourseService) {}

  @Get('course/:id')
  async getCourseById(@Param('id') id: string): Promise<course> {
    const course = await this.courseService.course(Number(id));
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course;
  }

  @Get('course')
  async getCourses(): Promise<course[]> {
    const courses = await this.courseService.courses();
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

    const status = await this.courseService.verifyGuideCompletion(Number(id));
    if (!status) {
      // TODO: rename message
      throw new NotFoundException(`Unable to verify completion for course with id ${id} not found`);
    }
    return status;
  }
}

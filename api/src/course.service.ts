import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { course } from '@prisma/client';

// Interacts with db
@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async course(id: number): Promise<course | null> {
    return this.prisma.course.findUnique({
      where: {
        id: id,
      },
    });
  }

  async courses(): Promise<course[]> {
    const courses = await this.prisma.course.findMany({});
    console.log('Courses fetched from database:', courses);
    return courses;
  }

  async verifyGuideCompletion(id: number): Promise<boolean> {
    // convert to prisma: SELECT * FROM healthcare EXCEPT SELECT * FROM healthcare_answer
    if (id === 1) {
      try {
        // Will return 0 only if there are no differences OR healthcare_answer is empty which should not happen
        const no_of_differences = await this.prisma.$queryRaw<
          { count: number }[]
        >`
          SELECT COUNT(*) 
          FROM (
              SELECT * FROM "healthcare_answer"
              EXCEPT
              SELECT * FROM "healthcare"
          ) AS diff;
        `;

        if (no_of_differences[0].count > 0) {
          return false;
        }

        // Double checking but redundant if healthcare_answer is never empty
        const no_of_healthcare_rows = await this.prisma.$queryRaw<
          { count: number }[]
        >`
          SELECT COUNT(*) 
          FROM "healthcare";
        `;

        if (no_of_healthcare_rows[0].count === 0) {
          return false;
        }

        return true;
      } catch (error) {
        console.error('Error fetching status:', error);
        return false;
      }
    }
    throw new Error('Course id is invalid');
  }
}

import { Module } from '@nestjs/common';
import { StudentService } from './student.service';


@Module({
  controllers: [],
  providers: [StudentService]
})
export class StudentModule {}

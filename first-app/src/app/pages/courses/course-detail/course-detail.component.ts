import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../playground/services/course.service';
import { Course } from '../../../model/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(CourseService);
  course!: Course;

  ngOnInit(): void {
    // this.route.snapshot.paramMap.get("courseId")
    this.route.params.subscribe((params) => {
      const { courseId } = params;
      this.service
        .fetchById(courseId)
        .subscribe((course) => (this.course = course));
    });
  }
}

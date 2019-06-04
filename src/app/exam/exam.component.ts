import { Component, OnInit } from '@angular/core';
import {ExamService} from '../shared/exam.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
exams: any = [];

  constructor(private examService : ExamService) { }

  ngOnInit() {
    console.log("Getting Questions");
    // console.log(this.questionService.getQuestions());

    this.examService.getExams().subscribe(exams => {
      this.exams = exams;
      console.log(this.exams);
    });

  }

}
import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../shared/question.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {
questions: any = [];
examId : string;
  constructor(private questionService: QuestionService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.examId = this.route.snapshot.params['eId'];
    this.questionService.getQuestions(this.examId).subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });
  }

  getQuestions() {
    console.log("Getting Questions");
    // console.log(this.questionService.getQuestions());

    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });
  }

}
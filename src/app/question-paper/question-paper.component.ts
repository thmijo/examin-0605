import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../shared/question.service";
import {ActivatedRoute} from '@angular/router';
import {Question} from '../shared/interface/question';

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {
questions: Question = [];
examId : string;
currentQuestionId : string;
currentQuestionIndex : number = 0;
previousQuestionIndex : number;
nextQuestionIndex : number = 1;
flag : boolean = false;

  constructor(private questionService: QuestionService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.examId = this.route.snapshot.params['eId'];
    this.questionService.getQuestions(this.examId).subscribe(questions => {
      this.questions = questions;
    });
  }

getQuestion(i:number) {
    this.currentQuestionIndex = i;
    this.previousQuestionIndex = i-1;
    if (this.previousQuestionIndex<0) 
       this.previousQuestionIndex = null
    this.nextQuestionIndex = i+1;
    if (this.nextQuestionIndex > this.questions.length-1)
    this.nextQuestionIndex = null;
    console.log(this.questions[this.currentQuestionIndex]);
  }

 /* getQuestions() {
    console.log("Getting Questions");
    // console.log(this.questionService.getQuestions());

    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });
  } */

}
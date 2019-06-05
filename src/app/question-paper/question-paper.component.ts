import { Component,ViewChild, OnInit } from '@angular/core';
import { QuestionService } from "../shared/question.service";
import {ActivatedRoute} from '@angular/router';
import {Question} from '../shared/interface/question';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {
@ViewChild('f', { static: false }) signupForm : NgForm;  
questions: any = [];
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

  rbClick(i:number,selectedOption:string) {
    // console.log ("radio button @@@"+this.signupForm.value.Option);
    // console.log ("radio button clicked"+selectedOption);
     this.questions[i].sel = selectedOption;
  }

getQuestion(i:number) {
  //console.log ("getttting values submitted"+this.signupForm.value.Option);
    this.currentQuestionIndex = i;
    this.previousQuestionIndex = i-1;
    if (this.previousQuestionIndex<0) 
       this.previousQuestionIndex = null
    this.nextQuestionIndex = i+1;
    if (this.nextQuestionIndex > this.questions.length-1)
    this.nextQuestionIndex = null;
     this.signupForm.reset();
   // this.questions[i-1].sel = "!!!!!!!!!!!!!!!!!!!!!!!!!"+this.signupForm.value.Option;
    //this.getQuestion.bind("ans3");
   // console.log(this.questions[this.currentQuestionIndex]);
  }

 /* getQuestions() {
    console.log("Getting Questions");
    // console.log(this.questionService.getQuestions());

    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });
  } */
  onSubmit() {
    console.log ("form submitted"+this.signupForm.value.Option);
    console.log ("form submitted"+this.signupForm.value.one);
    //this.signupForm.reset();
  }


}
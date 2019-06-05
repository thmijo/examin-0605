import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionPaperComponent} from './question-paper/question-paper.component';
import {QuestionComponent} from './question-paper/question/question.component';
import {ExamComponent} from './exam/exam.component';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  {path: 'exams/:eId/questions/:qid' , component: QuestionComponent},
  {path: 'exams/:eId' , component: QuestionPaperComponent},
  {path: 'exams' , component: ExamComponent},
  {path: 'exams' , component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
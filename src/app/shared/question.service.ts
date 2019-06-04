import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Question } from "./interfaces/question";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  questionCollection: AngularFirestoreCollection;
  questionDocument: AngularFirestoreDocument;

  constructor(private afs: AngularFirestore) {}


  getQuestions(eId:string): Observable<any[]> {
    //console.log(userId);

    this.questionCollection = this.afs.collection(`exams/${eId}/questions`);

    //console.log(this.questionCollection);

    return this.questionCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return { ...data };
        })
      ),
      tap(data => console.log(JSON.stringify(data)))
    );
  }

  getQuestion(qId: string) {
    return this.afs.doc(`questions/${qId}`);
  }
}

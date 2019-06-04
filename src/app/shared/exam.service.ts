import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Exam } from "./interfaces/exam";

@Injectable({
  providedIn: "root"
})
export class ExamService {
  examCollection: AngularFirestoreCollection;
  examDocument: AngularFirestoreDocument;

  constructor(private afs: AngularFirestore) {}

  getExams(): Observable<any[]> {
    //console.log(userId);

    this.examCollection = this.afs.collection(`exams`);

    //console.log(this.questionCollection);

    return this.examCollection.snapshotChanges().pipe(
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

  getExam(eId: string) {
    return this.afs.doc(`exams/${eId}`);
  }
}

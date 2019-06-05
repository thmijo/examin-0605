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
export class UserService {
  userCollection: AngularFirestoreCollection;
  userDocument: AngularFirestoreDocument;
  attemptsCollection: AngularFirestoreCollection;
  attemptDocument: AngularFirestoreDocument;

  constructor(private afs: AngularFirestore) {}

 getUsers(): Observable<any[]> {
  //getQuestions(eId:string): Observable<any[]> {
    //console.log(userId);

    this.userCollection = this.afs.collection(`users`);

    //console.log(this.questionCollection);

    return this.userCollection.snapshotChanges().pipe(
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
  getUserAttempts(uId:string): Observable<any[]> {
  //getQuestions(eId:string): Observable<any[]> {
    //console.log(userId);

  
    console.log("Logging UId from service "+uId);
    this.attemptsCollection = this.afs.collection(`users/${uId}/attempts`);


    return this.attemptsCollection.snapshotChanges().pipe(
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

  //getQuestion(qId: string) {
  //  return this.afs.doc(`questions/${qId}`);
  //}
}

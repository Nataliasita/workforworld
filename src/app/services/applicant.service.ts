import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private firestore:AngularFirestore) { }

  addApplicant( aplicantItem:any):Promise<any>{
    return this.firestore.collection('allApplicant').add(aplicantItem);
  }

  getApplicant() : Observable <any> {
    return this.firestore.collection('allApplicant', ref => ref.orderBy('dateCreation','desc')).snapshotChanges()
  }

}

import { Component} from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent  {

  // private itemsCollection: AngularFirestoreCollection<Item>;
  // items: Observable<Item[]>;
  // constructor(private afs: AngularFirestore) {
  //   this.itemsCollection = afs.collection<Item>('items');
  //   this.items = this.itemsCollection.valueChanges();
  // }
  // addItem(item: Item) {
  //   this.itemsCollection.add(item);
  // }
  

}

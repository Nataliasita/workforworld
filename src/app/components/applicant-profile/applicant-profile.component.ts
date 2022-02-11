import { Component} from '@angular/core';

import {  ApplicantService } from './../../services/applicant.service'

export interface Item { name: string; }

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent  {

  profileApplicant:any[] = []

constructor( private _applicantService: ApplicantService){
}

getApplicant(){
  this._applicantService.getApplicant().subscribe(data =>{
    console.log(data)
    this.profileApplicant=[];
    data.forEach((element:any) => {
        // console.log(element.payload.doc.id) acceso id
        // console.log(element.payload.doc.data()) acceso a datos appplicant
        this.profileApplicant.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
        })
    });
    console.log(this.profileApplicant);
  })
  
}

ngOnInit():void{
  this.getApplicant()
}


}

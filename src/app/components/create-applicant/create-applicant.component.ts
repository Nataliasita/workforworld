import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicantService } from 'src/app/services/applicant.service';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css']
})
export class CreateApplicantComponent implements OnInit {

  createApplicant:FormGroup;
  submitted=false;

  constructor(private fb: FormBuilder,
              private _applicantService: ApplicantService) { 
    this.createApplicant =this.fb.group({
      name:['', Validators.required],
      lastname:['', Validators.required],
      typeIdent:['', Validators.required],
      numberIdent:['', Validators.required],
      email:['', Validators.required],
      phoneContact:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  addApplicant(){
    
    this.submitted=true;
    if(this.createApplicant.invalid){
      return;
    }
    const dataApplicant:any ={
      name:this.createApplicant.value.name,
      lastname:this.createApplicant.value.lastname,
      typeIdent:this.createApplicant.value.typeIdent,
      numberIdent:this.createApplicant.value.numberIdent,
      email:this.createApplicant.value.email,
      phoneContact:this.createApplicant.value.phoneContact,
      dateCreation: new Date(),
      dateUpgrade: new Date(),
    }
    console.log(dataApplicant);

    this._applicantService. addApplicant(dataApplicant).then(()=>{
      console.log('aplicante agregado con exito')
    }).catch( error =>{
      console.log(error)
    })
  }

}

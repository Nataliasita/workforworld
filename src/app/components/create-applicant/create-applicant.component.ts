import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn} from '@angular/forms';
import { ApplicantService } from 'src/app/services/applicant.service';


@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css']
})
export class CreateApplicantComponent implements OnInit {

  optionsDoc= ['Cedula de Ciudadania', 'Cedula Extranjeria','Pasaporte'];

  optionStudyLevel= ['Basica secundaria','Tecnico o Tecnologo','Pregrado Universitario','Posgrado - Especializacion','Posgrado - Maestria','Posgrado - Doctorado'];

  optionState =['Terminado','En curso','Abandonado','Aplazado'];

  optionTime =['Menos de 1 año','Entre 1 año a 2 años','Entre 3 años a 4 años','Mas de 5 años'];

  optionCompany=['Administracion','Agricultura y desarrollo rural', 'Comercial', 'Energetico','Financiero',
                  'Industrial','Tecnologia y software','Turistico', 'Otro'
                ]

  optionMonth=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic',]

  optionSkill=['Actitud Positiva',' Adaptabilidad ','Analisis','Apoyar','Aprendizaje','Argumentacion','Asertividad',
                'Atencion al cliente','Bases de datos','Colaboracion','Comercial','Compromiso','Comunicacion','Concentracion',
                'Creatividad','Desarrollo', 'Digital','Diseño','Empatia','Escucha Activa','Flexibilidad','Honestidad','Ilustracion','Imaginacion','Innovacion',
                'Investigacion','Liderazgo','Logistica','Mercadeo','Negociacion','Planeacion','Proactividad','Responsabilidad','Toma de Decisiones','Trabajo en Equipo','Tecnologia',
                'Trabajo bajo presion','Ventas'
              ]


  createApplicant:FormGroup;
  submitted=false;
  selected:string='';

  constructor(private fb: FormBuilder,
              private _applicantService: ApplicantService) { 
    this.createApplicant =this.fb.group({
      name:['', Validators.required],
      lastname:['', Validators.required],
      typeIdent:['', Validators.required],
      numberIdent:['', Validators.required],
      email:['', Validators.required],
      phoneContact:['', Validators.required],
      country:['', Validators.required],
      city:['', Validators.required],
      levelStudy:['', Validators.required],
      skill:[''],
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
      country:this.createApplicant.value.country,
      city:this.createApplicant.value.city,
      levelStudy:this.createApplicant.value.levelStudy,
      skill:this.createApplicant.value.skill,
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


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn} from '@angular/forms';
import { ApplicantService } from 'src/app/services/applicant.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { validateEventsArray } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css']
})
export class CreateApplicantComponent implements OnInit {

  optionsDoc= ['Selecciona una opcion ','Cedula Ciudadania', 'Cedula Extranjeria','Pasaporte'];

  optionStudyLevel= ['Selecciona una opcion ','Basica secundaria','Tecnico o Tecnologo','Pregrado Universitario','Posgrado - Especializacion','Posgrado - Maestria','Posgrado - Doctorado'];

  optionState =['Selecciona una opcion ','Terminado','En curso','Abandonado','Aplazado'];

  optionTime =['Selecciona una opcion ','Menos de 1 año','Entre 1 año a 2 años','Entre 3 años a 4 años','Mas de 5 años'];

  optionCompany=['Selecciona una opcion ','Administracion','Agricultura y desarrollo rural', 'Comercial', 'Energetico','Financiero',
                  'Industrial','Tecnologia y software','Turistico', 'Otro'
                ]

  optionMonth=['','Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic',]

  optionSkill=[{id: 1, name:'Actitud Positiva'},{id:2, name :' Adaptabilidad '},{id:3, name:'Analisis'},{id:4, name:'Apoyar'},{id:5, name:'Aprendizaje'},{id:6, name:'Argumentacion'},{id:7, name:'Asertividad'},
                 {id:8, name:'Atencion al cliente'},{id:9, name:'Bases de datos'},{id:10, name:'Colaboracion'},{id:11, name:'Comercial'},{id:12, name:'Compromiso'},{id:13, name:'Comunicacion'},{id:14, name:'Concentracion'},
                 {id:15, name:'Creatividad'},{id:16, name:'Desarrollo'}, {id:17, name:'Digital'},{id:18, name:'Diseño'},{id:19, name:'Empatia'},{id:20, name:'Escucha Activa'},{id:21, name:'Flexibilidad'},{id:22, name:'Habilidades interpersonales'},{id:23, name:'Honestidad'},{id:24, name:'Ilustracion'},{id:25, name:'Imaginacion'},{id:26, name:'Innovacion'},
                 {id:27, name:'Investigacion'},{id:28, name:'Liderazgo'},{id:29, name:'Logistica'},{id:30, name:'Mercadeo'},{id:31, name:'Negociacion'},{id:32, name:'Planeacion'},{id:33, name:'Proactividad'},{id:34, name:'Tecnologia'}
              ]

  optionThought=[{id: 1, name: 'Administración de la información'},{id:2, name :'Algoritmos y programación'},{id:3, name:'Aspectos sociales y profesionales'},{id:4, name:'Ciencias de la computación'},{id:5,name:'Circuitos'},{id:6, name:'Computación centrada en la red'},
                  {id:7, name:'Computación gráfica'},{id:8, name:' Electrónica'},{id:9, name:' Ingeniería de software'},{id:10, name:'Interacción humana'},{id:11, name:'Sistemas digitales'},{id:12, name:' Machine Learning'},{id:13, name:'Sistemas operativos'},{id:14, name:'Telecomunicaciones'},
                  {id:15, name:'javaScript'}, {id:16, name:'Html'},{id:17, name: 'Css'}, {id:18, name:'Angular'},{id:19, name:'Programas de diseño Adobe(Photoshop,Lightroom )'}
                ]

    
            
  createApplicant:FormGroup;
  submitted=false;
  selected:string='';    
  selectedKnowledge:string='';
  imgP='';
  contain_part1=true;
  contain_part2=false;
  contain_part3=false;
  contain_term=false;
  modal=false;
  bar1=false;    
  bar2=false;              

  constructor(private fb: FormBuilder,
              private _applicantService: ApplicantService, 
              private avatarService: AvatarService) { 
    this.createApplicant =this.fb.group({
      name:['', Validators.required],
      lastname:['', Validators.required],
      typeIdent:[''],
      numberIdent:['', Validators.required],
      email:['', Validators.required],
      phoneContact:['', Validators.required],
      numBirth:[''],
      monthBirth:[''],
      yearBirth:[''],
      country:['', Validators.required],
      city:['', Validators.required],
      aboutMe:[''],
      travel:[''],
      knowledge:[''],
      levelStudy:[''],
      skill:['', ],
      titleStudy:[''],
      study:[''],
      yearJob:[''],
      nameJob:[''],
      nameCompany:[''],
      sectorCompany:[''],
      companyMonth:[''],
      companyYear:[''],
      companyActual:[''],
      finalMonth:[''],
      finalYear:[''],
      attainment:[''],
    })
  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.createApplicant.reset();
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
      numBirth:this.createApplicant.value.numBirth,
      monthBirth:this.createApplicant.value.monthBirth,
      yearBirth:this.createApplicant.value.yearBirth,
      country:this.createApplicant.value.country,
      city:this.createApplicant.value.city,
      aboutMe:this.createApplicant.value.aboutMe,
      travel:this.createApplicant.value.travel,
      knowledge:this.createApplicant.value.knowledge,
      levelStudy:this.createApplicant.value.levelStudy,
      skill:this.createApplicant.value.skill,
      titleStudy:this.createApplicant.value.titleStudy,
      study:this.createApplicant.value.study,
      yearJob:this.createApplicant.value.yearJob,
      nameJob:this.createApplicant.value.nameJob,
      nameCompany:this.createApplicant.value.nameCompany,
      sectorCompany:this.createApplicant.value.sectorCompany,
      companyMonth:this.createApplicant.value.companyMonth,
      companyYear:this.createApplicant.value.companyYear,
      companyActual:this.createApplicant.value.companyActual,
      finalMonth:this.createApplicant.value.finalMonth,
      finalYear:this.createApplicant.value.finalYear,
      attainment:this.createApplicant.value.attainment,
      dateCreation: new Date(),
      dateUpgrade: new Date(),
    }
    console.log(dataApplicant);

    this._applicantService. addApplicant(dataApplicant).then(()=>{
      console.log('aplicante agregado con exito')
      this.modal=true
    }).catch( error =>{
      console.log(error)
    })

  }

  getAllAvatars(){
    this.avatarService.getAllAvatars().subscribe(avatars => {
      console.log(avatars)
    })
  }
  getAvatar(){
    this.avatarService.getAvatar('jess',true).subscribe(avatar =>{
      console.log(avatar);
      this.imgP=avatar;
    });
  }
  change1(){
    this.contain_part1=false;
    this.contain_part2=true;
    this.bar1=true;
  }
  change2(){
    this.contain_part1=false;
    this.contain_part2=false;
    this.contain_part3=true;
    this.contain_term=true;
    this.bar2=true;
  }

  prueba(){
    
  }
  return1(){
    this.contain_part1=true;
    this.contain_part2=false;
    this.contain_part3=false;
    this.bar1=false;
  }
  return2(){
    this.contain_part3=false;
    this.contain_part2=true;
    this.contain_term=false;
    this.bar2=false;
  }



}


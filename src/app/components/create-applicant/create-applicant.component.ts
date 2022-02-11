import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn} from '@angular/forms';
import { ApplicantService } from 'src/app/services/applicant.service';
import { AvatarService } from 'src/app/services/avatar.service';

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
                'Creatividad','Desarrollo', 'Digital','Diseño','Empatia','Escucha Activa','Flexibilidad','Habilidades interpersonales','Honestidad','Ilustracion','Imaginacion','Innovacion',
                'Investigacion','Liderazgo','Logistica','Mercadeo','Negociacion','Planeacion','Proactividad','Responsabilidad','Toma de Decisiones','Trabajo en Equipo','Tecnologia',
                'Trabajo bajo presion','Ventas','Manejo de problemas y conflictos'
              ]

  optionThought=['Administración de la información','Algoritmos y programación','Aspectos sociales y profesionales','Ciencias de la computación','Circuitos','Computación centrada en la red',
                  'Computación gráfica',' Electrónica',' Ingeniería de software','Interacción humana','Sistemas digitales',' Machine Learning','Sistemas operativos','Telecomunicaciones',
                  'javaScript', 'Html', 'Css', 'Angular','Programas de diseño Adobe(Photoshop,Lightroom )'
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
      skill:[''],
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

}


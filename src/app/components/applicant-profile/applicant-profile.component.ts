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

selected:string='';    
selectedKnowledge:string='';

optionSkill=[{id: 1, name:'Actitud Positiva'},{id:2, name :' Adaptabilidad '},{id:3, name:'Analisis'},{id:4, name:'Apoyar'},{id:5, name:'Aprendizaje'},{id:6, name:'Argumentacion'},{id:7, name:'Asertividad'},
{id:8, name:'Atencion al cliente'},{id:9, name:'Bases de datos'},{id:10, name:'Colaboracion'},{id:11, name:'Comercial'},{id:12, name:'Compromiso'},{id:13, name:'Comunicacion'},{id:14, name:'Concentracion'},
{id:15, name:'Creatividad'},{id:16, name:'Desarrollo'}, {id:17, name:'Digital'},{id:18, name:'Diseño'},{id:19, name:'Empatia'},{id:20, name:'Escucha Activa'},{id:21, name:'Flexibilidad'},{id:22, name:'Habilidades interpersonales'},{id:23, name:'Honestidad'},{id:24, name:'Ilustracion'},{id:25, name:'Imaginacion'},{id:26, name:'Innovacion'},
{id:27, name:'Investigacion'},{id:28, name:'Liderazgo'},{id:29, name:'Logistica'},{id:30, name:'Mercadeo'},{id:31, name:'Negociacion'},{id:32, name:'Planeacion'},{id:33, name:'Proactividad'},{id:34, name:'Tecnologia'}
]

optionThought=[{id: 1, name: 'Administración de la información'},{id:2, name :'Algoritmos y programación'},{id:3, name:'Aspectos sociales y profesionales'},{id:4, name:'Ciencias de la computación'},{id:5,name:'Circuitos'},{id:6, name:'Computación centrada en la red'},
 {id:7, name:'Computación gráfica'},{id:8, name:' Electrónica'},{id:9, name:' Ingeniería de software'},{id:10, name:'Interacción humana'},{id:11, name:'Sistemas digitales'},{id:12, name:' Machine Learning'},{id:13, name:'Sistemas operativos'},{id:14, name:'Telecomunicaciones'},
 {id:15, name:'javaScript'}, {id:16, name:'Html'},{id:17, name: 'Css'}, {id:18, name:'Angular'},{id:19, name:'Programas de diseño Adobe(Photoshop,Lightroom )'}
]






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

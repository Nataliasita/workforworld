import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagesaAvatarF = [
    {
      src: './../../../assets/images/female1.svg',
      gender: 'female'
    },
    {
      src: './../../../assets/images/female2.svg',
      gender: 'female'
    },
    {
      src: './../../../assets/images/female3.svg',
      gender: 'female'
    },
    {
      src: './../../../assets/images/female4.svg',
      gender: 'female'
    },
    {
      src: './../../../assets/images/female5.svg',
      gender: 'female'
    },
    {
      src: './../../../assets/images/female6.svg',
      gender: 'female'
    },
    {
      src: './../../../assets/images/female7.svg',
      gender: 'female'
    },
    {
      src: './../../../assets/images/female8.svg',
      gender: 'female'
    },
    {
      src: './../../../assets/images/female9.svg',
      gender: 'female'
    },
    {
      src: './../../../assets/images/female10.svg',
      gender: 'female'
    },
  ]

  imagesaAvatarM = [
    {
      src: './../../../assets/images/male1.svg',
      gender: 'male'
    },
    {
      src: './../../../assets/images/male2.svg',
      gender: 'male'
    },
    {
      src: './../../../assets/images/male3.svg',
      gender: 'male'
    },
    {
      src: './../../../assets/images/male4.svg',
      gender: 'male'
    },
    {
      src: './../../../assets/images/male5.svg',
      gender: 'male'
    },
    {
      src: './../../../assets/images/male6.svg',
      gender: 'male'
    },
    {
      src: './../../../assets/images/male7.svg',
      gender: 'male'
    },
    {
      src: './../../../assets/images/male8.svg',
      gender: 'male'
    },
    {
      src: './../../../assets/images/male9.svg',
      gender: 'male'
    },
    {
      src: './../../../assets/images/male10.svg',
      gender: 'male'
    },
  ]

  imageSrc = '';  
  currentImage: any;            

cambioAvatar(){
  const r= Math.floor(Math.random() * (this.imagesaAvatarF.length-2)) + 0;
  return this.imagesaAvatarF[r];
}

selectAvatar(){
  this.currentImage = this.cambioAvatar().src;
  this.imageSrc=this.currentImage;
  console.log('sdfsdf')
}

selectAvatar2(){
  this.currentImage = this.cambioAvatar2().src;
  this.imageSrc=this.currentImage;
  console.log('sdfsdf')
}

cambioAvatar2(){
  const r= Math.floor(Math.random() * (this.imagesaAvatarM.length-2)) + 0;
  return this.imagesaAvatarM[r];
}

}

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

  imagesaAvatar = [
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

  imageSrc = '';  
  currentImage: any;            

cambioAvatar(){
  const r= Math.floor(Math.random() * (this.imagesaAvatar.length-2)) + 0;
  return this.imagesaAvatar[r];
}

selectAvatar(){
  this.currentImage = this.cambioAvatar().src;
  this.imageSrc=this.currentImage;
  console.log('sdfsdf')
}


}

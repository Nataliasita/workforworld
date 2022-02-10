import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Avatar } from '../interfaces/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor( private http:HttpClient) { }

  getAllAvatars(){
    const path= 'https://avatars.dicebear.com/api/avataaars/:seed.svg';
    return this.http.get(path, {responseType: 'arraybuffer'});
  }

  getAvatar(seed:string, dataUri:boolean ){
    const path= `https://avatars.dicebear.com/api/avataaars/${seed}/${dataUri}.svg`
    return this.http.get(path, {responseType: 'text'})
}

}
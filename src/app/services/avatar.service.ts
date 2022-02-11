import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'

import { Avatar } from '../interfaces/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor( private http:HttpClient) { }

  getAllAvatars(){
    const path= 'https://avatars.dicebear.com/api/avataaars/:seed.svg';
    return this.http.get(path, {responseType: 'text'});
  }

  getAvatar(seed:string, dataUri:true){
    const headers = new HttpHeaders();
    headers.set('Accept', 'image/svg+xml');
    const path= `https://avatars.dicebear.com/api/avataaars/${seed}/${dataUri}.svg`
    return this.http.get(path,{responseType: 'text'})
  }

  
}
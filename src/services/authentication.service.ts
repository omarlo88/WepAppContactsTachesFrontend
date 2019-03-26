import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthenticationService {

  private host: string = "http://localhost:8080";
  //private host: string = "https://gestiondescontactsettaches.cfapps.io";
  private jwtToken = null;
  private roles:Array<any>=[];
  private userConnected: string="";

  constructor(private http: HttpClient) { }

  login(user){
    return this.http.post(this.host + "/login", user, {observe: "response"});
  }

  loadToken(){
    this.jwtToken = localStorage.getItem("token");
  }

  saveToken(jwt: string){
    localStorage.setItem("token", jwt);
    let jwtHelper = new JwtHelper();
    this.roles = jwtHelper.decodeToken(jwt).roles;
    this.userConnected = jwtHelper.decodeToken(jwt).sub;
  }

  getToken(){
    if(this.jwtToken == null) { this.loadToken();}
    return this.jwtToken;
  }

  logout(){
    this.jwtToken = null;
    localStorage.removeItem("token");
  }

  isAdmin(){
    for( let r of this.roles){
      if( r.authority == "ADMIN") return true;
    }
    return false;
  }

  getUserConnected(){ return this.userConnected;}

  enregistrer(userForm){
    return this.http.post(this.host + "/AccountRestController/register", userForm);
  }
}

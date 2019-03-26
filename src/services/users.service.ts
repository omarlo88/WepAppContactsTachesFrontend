import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsersService {

  private host: string = "http://localhost:8080/AccountRestController";
  //private host: string = "https://gestiondescontactsettaches.cfapps.io/AccountRestController"
  constructor(private http: HttpClient) { }

  public getUsers(jwt: string){
    return this.http.get(this.host + "/users",
      { headers: new HttpHeaders({"authorization": jwt})});
  }

}

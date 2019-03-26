import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tache } from '../model/model.tache';

@Injectable()
export class TachesService {

  private host: string = "http://localhost:8080";
  //private host: string = "https://gestiondescontactsettaches.cfapps.io"
  constructor(private http: HttpClient) { }

  getTaches(jwtToken: string){
    return this.http.get(this.host + "/TachesRestController/taches",
      {headers: new HttpHeaders({"Authorization": jwtToken})});
  }

  getTache(jwtToken: string, id:number){
    return this.http.get(this.host + "/TachesRestController/taches/" + id,
      {headers: new HttpHeaders({"Authorization": jwtToken})});
  }

  chercherTaches(jwtToken:string, motCle:string, page: number, size:number){
    return this.http.get(this.host + "/TachesRestController/chercherTaches?"
      + "motCle=" + motCle + "&page=" + page + "&size=" + size,
      {headers: new HttpHeaders({"Authorization": jwtToken})});
  }

  enregistrerTache(tache: Tache, jwtToken: string){
    return this.http.post(this.host + "/TachesRestController/taches", tache,
      {headers: new HttpHeaders({"Authorization": jwtToken})});
  }

  updateTache(jwt:string, tache: Tache){
    return this.http.put(this.host + "/TachesRestController/taches/" + tache.id, tache,
      {headers: new HttpHeaders({"Authorization": jwt})});
  }

  deleteTache(id: number, jwt:string){
    return this.http.delete(this.host + "/TachesRestController/taches/" + id,
      {headers: new HttpHeaders({"Authorization": jwt})});
  }
}

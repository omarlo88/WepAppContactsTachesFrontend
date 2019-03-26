import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GaleryService {

  private host: string = "https://pixabay.com/api/";
  private string_key: string = "8000561-fb965d3bd2ba7696f0d46b078";

  constructor(private http: HttpClient) { }

  getPhotos(nomVille: string, page: number, size: number){
    return this.http.get(this.host + "?key=" + this.string_key + "&q=" + nomVille + "&page=" + page
        + "&per_page=" + size);
  }

}

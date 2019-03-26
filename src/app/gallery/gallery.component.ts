import { Component, OnInit } from '@angular/core';
import { GaleryService } from '../../services/galery.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  motCle: string = "";
  listePhotos:any;
  pageCourrente: number = 1;
  private size: number = 10;
  totalPages: Array<number>;


  constructor(private galeryService: GaleryService,
    public authService: AuthenticationService,
    private router : Router) {}

  ngOnInit() {
  }

  onLogout(){
    this.router.navigateByUrl("/login");
  }

  onChercher(){
    this.galeryService.getPhotos(this.motCle, this.pageCourrente, this.size).subscribe(data =>{
      console.log(data);
      this.listePhotos = data;
      let nbPages = this.listePhotos.totalHits / this.size
      if(this.listePhotos.totalHits % this.size != 0){ nbPages = Math.trunc(nbPages); ++ nbPages;}
      /*
      if (this.listePhotos.totalHits % this.size != 0) {
        nbPages = Math.trunc(nbPages) + 1;
      }*/
      this.totalPages = new Array(nbPages);
    }, err =>{
      console.log(err);
    });
  }

  getTags(tags: string){
    return tags.length <= 20 ? tags : this.getSortStr(tags);
  }

  getSortStr(tags: string){
    let s : string = "";
    for(let i= 0; i<=20; i++){
      s += tags.charAt(i);
    }
    return s + "...";
  }

  goToPage(index:number){
    this.pageCourrente = index + 1;
    this.onChercher();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { TachesService } from '../../services/taches.service';
import { Tache } from '../../model/model.tache';
import { Location } from '@angular/common';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {

  public pageTaches:any;
  public pageCourrente: number= 0;
  private size: number= 5;
  public motCle: string = "";
  public pages: Array<number>;

  constructor(public autService: AuthenticationService, private router: Router,
    private tachesService: TachesService, private location: Location) { }

  ngOnInit() {

    /*
    this.tachesService.getTaches(token).subscribe(data =>{
      console.log(data);
    }, err =>{
      console.log(err);
      this.router.navigateByUrl("/login");
    });*/

    //this.tachesService.chercherTaches(token, "A", 0, 5).subscribe( data =>console.log(data));

    this.doChercher();
  }

  doChercher(){
    let token = this.autService.getToken();
    this.tachesService.chercherTaches(token, this.motCle, this.pageCourrente,this.size)
    .subscribe(data =>{
      this.pageTaches = data;
      this.pages = new Array(this.pageTaches.totalPages);
      console.log(this.pageTaches);
    }, error =>{
      console.log(error);
      this.onLogout();
    });
  }

  onLogout(){
    this.autService.logout();
    this.router.navigateByUrl("/login");
  }

  onChercher(){
    this.doChercher();
  }

  goToPage(index: number){
    this.pageCourrente = index;
    this.doChercher();
  }
/* 2ème façon d'appeler le composant Edit-tache
  onEdit(id: number){
    this.router.navigate(["/edit-tache", id]);
  }*/

  onGoBack(){
    //this.location.back();
    this.router.navigateByUrl("/home");
  }

  onRemove(t: Tache){
    let token = this.autService.getToken();
    this.tachesService.deleteTache(t.id, token).subscribe(data => {
      this.pageTaches.content.splice(this.pageTaches.content.indexOf(t), 1);
    },err =>{
      console.log(err);
    });
  }

  getStatut(t: boolean){
    return t == true ? "Ouvert" : "Fermé"
  }

  getDescription(desc: string){
    return desc.length <= 5 ? desc : this.getSortStr(desc);
  }

  getSortStr(desc: string){
    let s : string = "";
    for(let i= 0; i<=20; i++){
      s += desc.charAt(i);
    }
    return s + "...";
  }

}

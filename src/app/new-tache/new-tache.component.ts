import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Tache } from '../../model/model.tache';
import { TachesService } from '../../services/taches.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-tache',
  templateUrl: './new-tache.component.html',
  styleUrls: ['./new-tache.component.css']
})
export class NewTacheComponent implements OnInit {

  //public tache: Tache = new Tache();
  public tache: Tache;
  public mode: number = 0;

  constructor(private location: Location, private tacheService: TachesService,
      public authService: AuthenticationService, private route: Router) { }

  ngOnInit() {
    if(!this.authService.isAdmin()){ this.route.navigateByUrl("/login");}
    this.tache = new Tache();
  }

  setError(){ this.mode = 0;}

  onSave(dataForm){
    let jwt = this.authService.getToken();
    this.tacheService.enregistrerTache(this.tache, jwt).subscribe(data =>{
      this.tache = data;
      this.mode = 2;
    }, err =>{
      this.mode = 1;
      console.log(err.error.message);
      console.log(err);
      //console.log(JSON.parse(err.body).message);
    });
  }

  goBack(){ this.location.back();}

  onLogout(){
    this.authService.logout();
    this.route.navigateByUrl("/login");
  }


}

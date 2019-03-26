import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { TachesService } from '../../services/taches.service';
import { Tache } from '../../model/model.tache';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-tache',
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.css']
})
export class EditTacheComponent implements OnInit {

  public tache: Tache = new Tache();

  constructor(public authService: AuthenticationService,
      private tacheService:TachesService, private location: Location,
      private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if(!this.authService.isAdmin()){ this.router.navigateByUrl("/login");}
    let token = this.authService.getToken();
    //const id = +this.route.snapshot.paramMap.get('id');
    const id = +this.route.snapshot.params["id"];
    this.tacheService.getTache(token, id).subscribe(data =>{
      this.tache = data;
      console.log(this.tache.statut);
    }, error =>{
      console.log(error);
    });
  }

  onUpdate(){
    console.log(this.tache.statut);
    console.log(this.tache);
    let token = this.authService.getToken();
    this.tacheService.updateTache(token, this.tache).subscribe(data =>{
      console.log(data);
      this.location.back();
    }, err =>{
      console.log(err);
    });
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }


}

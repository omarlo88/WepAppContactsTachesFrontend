import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../../model/model.tache';
import { AuthenticationService } from '../../services/authentication.service';
import { TachesService } from '../../services/taches.service';


@Component({
  selector: 'app-detail-tache',
  templateUrl: './detail-tache.component.html',
  styleUrls: ['./detail-tache.component.css']
})
export class DetailTacheComponent implements OnInit {

  public tache:Tache = new Tache();
  constructor(private route: ActivatedRoute, private location: Location,
      public authService: AuthenticationService, private tacheService: TachesService,
      private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];
    let token = this.authService.getToken();
    this.tacheService.getTache(token, id).subscribe( data =>{
      this.tache = data;
      console.log(this.tache.statut);
    }, err =>{
      console.log(err);
      this.onGoBack();
    });
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

  onGoBack(){ this.location.back();}
}


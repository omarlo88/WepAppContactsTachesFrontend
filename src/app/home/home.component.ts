import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mode:number = 1;

  constructor(private location: Location, private router: Router,
      public authService: AuthenticationService) {}

  ngOnInit() { }

  //onGoTaches(){ this.router.navigate(["/taches"]);}

  goBack(){
    //this.location.back();
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users:any;

  constructor(private router: Router, public authService: AuthenticationService,
      private usersService: UsersService) { }

  ngOnInit() {
    if(!this.authService.isAdmin()){ this.router.navigateByUrl("/login");}
    let jwt = this.authService.getToken();
    this.usersService.getUsers(jwt).subscribe(data =>{
      console.log(data);
      this.users = data;
    }, err =>{
      console.log(err);
      this.router.navigateByUrl("/home");
    });
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
/*
  onDetail(id: number){
    this.router.navigate(["/detail-user", id]);
  } remplacé par routerLink="/detail-user/{{u.id}}"*/

  /*
  onEdit(id: number){
    this.router.navigate(["/edit-user", id]);
  } remplacé par routerLink="/edit-user/{{u.id}}"*/

  onRemove(id: number){}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode: number = 0;

  constructor( private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(dataForm){
    this.authService.login(dataForm).subscribe(res =>{
      console.log(res);
      let jwt = res.headers.get("authorization");
      console.log(jwt);
      this.authService.saveToken(jwt);
      //this.router.navigateByUrl("/home");
      this.router.navigate(["/home"]);
    }, err =>{
      console.log(err);
      this.mode = 1;
    });
  }

  setMode(){
    this.mode = 0;
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mode: number =0;

  constructor(private authService: AuthenticationService,
    private location: Location) { }

  ngOnInit() {
  }

  onEnregistrer(dataForm){
    console.log(dataForm);
    this.authService.enregistrer(dataForm).subscribe(data =>{
      console.log(data);
      this.location.back();
      this.mode = 0;
    }, err =>{
      console.log(err);
      this.mode = 1;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginGuardService } from './../login-guard.service';
import { User } from './../user';
@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  constructor(
    private readonly authService: LoginGuardService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }
login(user:User){
  this.authService.login(user).then(()=> this.router.navigate(['/adminpanel']))
  .catch((e)=> console.log(e.message));
}
}

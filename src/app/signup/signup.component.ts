import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Router } from '@angular/router';
import { LoginGuardService } from '../login-guard.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private readonly authService: LoginGuardService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {}
    register(data: User) {
      this.authService.register(data).then(()=> this.router.navigate(['/login'])).catch((e)=> console.log(e.message));
      console.log(data.email)
    }
}

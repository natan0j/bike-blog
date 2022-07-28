import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGuardService } from '../login-guard.service';
import { Event } from '../event';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  fullPost: any[] = [];
  constructor(
    private readonly authService: LoginGuardService,
    private readonly router: Router
    ) {}

  ngOnInit(): void {}
    login(userData: User){
      this.authService.login(userData).then(()=>this.router.navigate(['/adminpanel']))
      .catch((e)=> console.log(e.message))
    }
    toArray(sendEvent?: Event){
      this.fullPost.push(sendEvent);
      console.log(this.fullPost);
    }
}

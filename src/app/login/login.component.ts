import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginGuardService } from './../login-guard.service';
import { User } from './../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output()
  formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    
  ) { }
  form: FormGroup;

  ngOnInit():void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password'); 
  }
  
  onSubmit() {
    this.formData.emit(this.form.value);
  }
}

import { Auth, createUserWithEmailAndPassword, EmailAuthCredential, signInWithEmailAndPassword, signOut, } from '@angular/fire/auth';
import { User } from './user';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'}) 
export class LoginGuardService {
  constructor(private auth: Auth  ) {}
    login({email,password}: User){
      return signInWithEmailAndPassword(this.auth, email, password)
    }
    register({email,password}: User){
      return createUserWithEmailAndPassword(this.auth, email, password);
    }
      logout(){
        return signOut(this.auth);
      }
   }


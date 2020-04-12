import { Injectable } from '@angular/core';


import * as firebase from 'firebase/app';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  userDetails: firebase.User;
  userCredentials: firebase.auth.UserCredential;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(user => {
      console.log('updating user state');
      this.userDetails = user;
    });
  }

  isAuthenticated() {
    return this.userDetails != null;
  }

  get userId() {
    return this.userCredentials.user.uid;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.userCredentials = value;
        console.log('Nice, it worked!');
        console.log(value);
        this.router.navigate(['/vocabList']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.userCredentials = undefined;
    this.firebaseAuth
      .auth
      .signOut();
  }
}

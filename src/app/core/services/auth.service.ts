import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId:string = '';

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  signUp(email:string, password:string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      (response) => {
        this.router.navigate(['/login']);
      }
    )
    .catch(
      err => {
        if(err.message == 'The email address is already in use by another account.') {
          this.snackBar.open('هذا البريد الألكتروني تم التسجيل به مسبقا','',{
            duration: 10000
          });
        } else {
          this.snackBar.open('الرجاء أدخال بريد الكتروني صحيح','',{
            duration: 4000
          });
        }
      }
    )
  }

  signin(email:string, password:string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      (response) => {
        localStorage.setItem('currentUser', JSON.stringify(firebase.auth().currentUser));
        firebase.auth().currentUser.getIdToken().then(
          (token)=>{
            localStorage.setItem('token', token);
          }
        )
        this.router.navigate(['/tasklist'])
      }
    ).catch(
      () => {
        this.snackBar.open('تأكد من صحة البريد الألكتروني أو الرقم السري','',{
          duration: 2000
        });
      }
    )
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserId() {
    if(JSON.parse(localStorage.getItem('currentUser'))) {
      this.userId = JSON.parse(localStorage.getItem('currentUser')).uid;
      return this.userId;
    } else {
      return this.userId;
    }


  }

  logout() {
    firebase.auth().signOut().then(()=>{
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
    }).then(()=>{
      this.router.navigate(['/login']);
    }).catch((err)=>{
      console.log(err)
    })

  }

  isAuthenticated() {
    return localStorage.getItem('token')!= null && localStorage.getItem('token')!= '';
  }

}

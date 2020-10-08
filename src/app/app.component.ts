import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import  { firebaseConfig }  from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'دونها';


  constructor() {

  }

  ngOnInit() {
    firebase.initializeApp(firebaseConfig);
  }

}

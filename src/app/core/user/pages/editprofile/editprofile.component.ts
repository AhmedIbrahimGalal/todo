import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  @ViewChild('file', { static: false })  file:any;

  form = this.fb.group({
    img: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    day: ['', Validators.required],
    month: ['', Validators.required],
    year: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }



}

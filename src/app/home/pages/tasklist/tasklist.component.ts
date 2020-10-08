import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {


  arabic: RegExp = /^[\u0621-\u064A\s0-9]+$/;
  displayModal:boolean = false;
  tasklist: any = [];
  @ViewChild('tasks', { static: true }) ulElement:ElementRef;

  modalForm = this.form.group({
    title: ['', Validators.required],
    desc: ['', Validators.required],
    status: ['', Validators.required]
  })

  taskEdited:any;

  taskId:any;
  taskDate:any;


  constructor(private taskService: TaskService, private form:FormBuilder) { }

  ngOnInit() {


    this.getTasks();

  }

  makeUlScroll() {
    if(this.tasklist.length >= 10) {
      this.ulElement.nativeElement.style.overflowY = 'scroll';
    } else {
      this.ulElement.nativeElement.style.overflowY = 'visible';
    }
  }


  getTasks() {
    this.taskService.getTasks().subscribe((response)=>{
      if(response == null) {
        this.tasklist = null;
      } else {
        this.tasklist = Object.values(response);
      }
      if(this.tasklist != null) {
        this.makeUlScroll();
      }
    },
    (err)=>{
      //handle error here
    })
  }

  showDialog(id:any, taskDate:any) {
    this.displayModal = true;
    this.taskId = id;
    this.taskDate = taskDate;
    this.getModalTask(id);
}

editTask(id:any, taskEdited:any) {
  this.taskService.editTask(id, taskEdited).subscribe((response)=>{
    this.getTasks();
  }, (err)=>{
    //console.log(err);
  });
}

getModalTask(id:any) {
  this.taskService.getTaskModal(id).subscribe((response)=>{
    //console.log(response);
    this.modalForm.controls.title.setValue(response['title']);
    this.modalForm.controls.desc.setValue(response['desc']);
    this.modalForm.controls.status.setValue(response['status']);
  },
  (err)=>{
    //console.log(err);
  })
}

onSubmit() {
  this.taskEdited = {
    title: this.modalForm.controls.title.value,
    desc: this.modalForm.controls.desc.value,
    status: this.modalForm.controls.status.value,
    id: this.taskId,
    createdDate: this.taskDate
  }

  this.editTask(this.taskId, this.taskEdited);
  this.displayModal = false;
  this.modalForm.reset();

}

deleteTask() {

  this.taskService.deleteTask(this.taskId).subscribe((response)=>{
    //console.log(response);
    this.getTasks();
  }, (err)=>{
    //console.log(err);
  })
  this.displayModal = false;
}

}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { TaskService } from "src/app/core/services/task.service";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: "app-newtask",
  templateUrl: "./newtask.component.html",
  styleUrls: ["./newtask.component.scss"],
})
export class NewtaskComponent implements OnInit {
  newTaskForm = this.form.group({
    title: ["", Validators.required],
    status: ["", Validators.required],
    desc: ["", Validators.required],
  });

  arabic: RegExp = /^[\u0621-\u064A\s0-9]+$/;

  constructor(
    private form: FormBuilder,
    private taskService: TaskService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  onSubmit() {

    let task = {
      title: this.newTaskForm.controls.title.value,
      desc: this.newTaskForm.controls.desc.value,
      status: this.newTaskForm.controls.status.value,
      id: `_${Math.random().toString(36).substr(2, 9)}`,
      createdDate:`${new Date()}`
    };




    this.storeTasks(task, task.id);

    this.newTaskForm.reset();
  }

  storeTasks(task:any, taskId:any) {
    this.taskService.setTaskList(task, taskId).subscribe(
      (response) => {
        this.openSnackBar();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openSnackBar() {
    this.snackBar.open('تم أضافة المهمة بنجاح أنتقل الي قائمة المهام','',{
      duration: 2000
    });
  }


}

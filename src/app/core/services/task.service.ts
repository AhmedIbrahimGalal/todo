import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root",
})
export class TaskService {

  baseEndPoint:string = 'https://todo-4de6f.firebaseio.com/users';



  constructor(private http: HttpClient, private authService:AuthService) {}

  setTaskList(task:any, taskId:any) {
    let token = this.authService.getToken();
    let uid = this.authService.getUserId();
    let headers = new HttpHeaders({ "content-type": "application/json" });
    return this.http.put(
      `${this.baseEndPoint}/${uid}/tasks/${taskId}.json?auth=${token}`,
      task,
      { headers: headers }
    );
  }

  getUsers() {
    let headers = new HttpHeaders();
    return this.http.get(`${this.baseEndPoint}.json`, {
      headers: headers,
    });
  }

  getTasks() {
    let token = this.authService.getToken();
    let uid = this.authService.getUserId();
    return this.http.get(
      `${this.baseEndPoint}/${uid}/tasks.json?auth=${token}`
    );
  }

  getTaskModal(id:any) {
    let token = this.authService.getToken();
    let uid = this.authService.getUserId();
    return this.http.get(`${this.baseEndPoint}/${uid}/tasks/${id}.json?auth=${token}`);
  }

  editTask(id:any, task:any) {
    let token = this.authService.getToken();
    let uid = this.authService.getUserId();
    let headers = new HttpHeaders({ "content-type": "application/json" });
    return this.http.put(`${this.baseEndPoint}/${uid}/tasks/${id}.json?auth=${token}`, task ,{ headers: headers });
  }

  deleteTask(id:any) {
    let token = this.authService.getToken();
    let uid = this.authService.getUserId();
    return this.http.delete(`${this.baseEndPoint}/${uid}/tasks/${id}.json?auth=${token}`);
  }

}

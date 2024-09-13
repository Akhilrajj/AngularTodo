import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo} from 'src/app/todo/todo.component';

export class stringType{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class TodoListServiceService {


  constructor(
    private http:HttpClient
  ) { }

  getTodo(UserName:string){
    return this.http.get<todo[]>(`http://localhost:8083/todo/${UserName}/getTodo`);
  }
  getSingleTodo(userName:String,id:number){
    return this.http.get<todo>(`http://localhost:8083/todo/${userName}/getTodo/${id}`)
  }
}

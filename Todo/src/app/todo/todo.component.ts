import { Component ,OnInit} from '@angular/core';
import { stringType, TodoListServiceService } from '../service/data/todo-list-service.service';
import { Router } from '@angular/router';

export class todo{
  
    public id:number=0;
    public userName:string='';
    public task:string='';
    public endDate: Date = new Date();
  
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos:todo[] =[]

  constructor(private todoService:TodoListServiceService,
    private router :Router
  ){
   
  }

 ngOnInit(){

  this.todoService.getTodo("akhil").subscribe(
    respose =>{
      this.todos =respose
    }
  )
 }

 updateTodo(id:number){
  console.log(id);
  this.router.navigate(['todo',id])

 }

 deleteTodo(id:number){
  console.log(`Todo ${id}`)
 }

}

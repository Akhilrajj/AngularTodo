import { Component, OnInit ,Input} from '@angular/core';
import { TodoListServiceService } from '../service/data/todo-list-service.service';
import { todo } from '../todo/todo.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit{

  id:any="";
  username:String="akhil";
  todos!:todo;

  constructor( private getSingleTodo :TodoListServiceService
    ,private route:ActivatedRoute
  ){

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.getSingleTodo.getSingleTodo(this.username, this.id).subscribe(
      response => { 
        this.todos = response;
        // console.log(this.todos);
    
        // const timestamp = this.todos.endDate; // Assuming 'date' is the field with the timestamp
        // const date = new Date(timestamp);
    
        // const formattedDate = `${('0' + date.getDate()).slice(-2)}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
        // console.log(formattedDate);
        // console.log(response);
        // this.todos.endDate=new Date(formattedDate);
      }
    );
    

    // this.getSingleTodo.getSingleTodo(this.username,this.id).subscribe (
    //   response => { 
    //     this.todos = response
    //     console.log(this.todos);
    //     console.log(response);
    //   }
    // )
  }

  Save(){
    console.log("hi");
  }
}

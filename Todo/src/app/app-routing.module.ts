import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoComponent } from './todo/todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { UpdateTodoComponent } from './update-todo/update-todo.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'todo',component:TodoComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'todo/:id',component:UpdateTodoComponent,canActivate:[RouteGuardService]},
  
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

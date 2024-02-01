import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StudentComponent} from './student/student.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {StudentFormComponent} from './student-form/student-form.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'student/:id', component: StudentComponent},
  {path:'student-form', component: StudentFormComponent},
  {path:'student-details/:id', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

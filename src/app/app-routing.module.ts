import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './Extra_Pages/registration-form/registration-form.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'regform' , component:RegistrationFormComponent},
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)},
  {path:'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

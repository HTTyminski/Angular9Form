import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsCreateComponent } from './components/students/students-create/students-create.component';
import { StudentsDeleteComponent } from './components/students/students-delete/students-delete.component';
import { StudentsUpdateComponent } from './components/students/students-update/students-update.component';
import { HomeComponent} from './views/home/home.component';
import { StudentsComponent } from './views/students/students.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent  
  },
  {
    path:"students",
    component: StudentsComponent  
  },
  {
    path:"students/create",
    component: StudentsCreateComponent  
  },
  {
    path:"students/update/:id",
    component: StudentsUpdateComponent  
  },
  {
    path:"students/delete/:id",
    component: StudentsDeleteComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

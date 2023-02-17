import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../students.service';
import { Router } from '@angular/router';
import { Student } from '../students.module';
@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.css']
})
export class StudentsCreateComponent implements OnInit {

  sexSelected!: string;
  sexType: string[] = ['M', 'F'];

  student: Student = {
    nome: '',
    sobrenome: '',
    idade: 0,
    sexo: ''
  }
  
  constructor(
    private studentsService: StudentsService,
    private router: Router
    ){}

  ngOnInit(): void {
    
  }

  createStudent(): void {
    this.studentsService.create(this.student).subscribe(() => {
      this.studentsService.showMessage('Aluno adicionado com sucesso!')
      this.router.navigate(['/students'])
    })
  }

  alterStudent(): void {
    this.studentsService.showMessage('Aluno alterado com sucesso!')
  }
  
  cancel(): void {
    this.router.navigate(['/students'])
  }
  

}

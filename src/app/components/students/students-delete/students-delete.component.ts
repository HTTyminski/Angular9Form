import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../students.module';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-delete',
  templateUrl: './students-delete.component.html',
  styleUrls: ['./students-delete.component.css']
})
export class StudentsDeleteComponent implements OnInit {

  student!: Student
 
  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.studentsService.readById(id!).subscribe( student => {
      this.student = student
    })
  }

  deleteStudent(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.studentsService.delete(id!).subscribe( student => {
        this.student = student
      })
      this.studentsService.read
    this.studentsService.showMessage("Aluno removido com sucesso!")
    this.router.navigate(["/students"])
  }

  cancel():void {
    this.router.navigate(['/students']);
  }
}

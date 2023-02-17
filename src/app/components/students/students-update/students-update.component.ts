import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../students.module';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-update',
  templateUrl: './students-update.component.html',
  styleUrls: ['./students-update.component.css']
})
export class StudentsUpdateComponent implements OnInit {

  student!: Student

  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.studentsService.readById(id!).subscribe( student => {
      this.student = student
    })
  }

  updateStudent(): void {
    this.studentsService.update(this.student).subscribe(() => {
      this.studentsService.showMessage("Dados do aluno alterado com sucesso!")
      this.router.navigate(["/students"])
    })

  }
  cancel():void {
    this.router.navigate(['/students']);
  }
}

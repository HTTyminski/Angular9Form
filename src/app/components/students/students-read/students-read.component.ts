import { Component, OnInit } from '@angular/core';
import { Student } from '../students.module';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-read',
  templateUrl: './students-read.component.html',
  styleUrls: ['./students-read.component.css']
})
export class StudentsReadComponent implements OnInit {

  searchText = ''
  students: Student[] = []
  displayedColumns = ['id','nome','sobrenome','idade','sexo','action']

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.read().subscribe( students => {
      this.students = students
      console.log(students)
    })
  }
}

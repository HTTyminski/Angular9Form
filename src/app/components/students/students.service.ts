import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Student } from './students.module';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl = "https://api-laser-teste.herokuapp.com/alunos"

  constructor (
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student)
  }
  read(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl)
  }
  readById(id: string): Observable<Student> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Student>(url)
  }
  update(student: Student): Observable<Student> {
    const url = `${this.baseUrl}/${student.id}`
    return this.http.put<Student>(url, student)
  }
  delete(id: string): Observable<Student> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Student>(url);
  }
}

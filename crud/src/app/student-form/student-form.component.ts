import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  newStudent: any={};
  constructor(private router: Router)
  {}
  saveStudent(){
    console.log('Save Student:', this.newStudent);
    this.newStudent={};
    this.router.navigate(['/home']);
  }
}

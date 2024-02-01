import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: any[]=[];
  constructor(private router: Router){}
  ngOnInit(){
    this.fetchStudents();
  }
  fetchStudents(){
    this.students=[
      {id:1, name:'Raja Singh', DOB:'1990-01-01', subjects:{Sub1: 70, Sub2:80, Sub3: 90, Sub4: 75,Sub5: 85}},
      {id:1, name:'Raja Singh', DOB:'1990-01-01', subjects:{Sub1: 70, Sub2:80, Sub3: 90, Sub4: 75,Sub5: 85}}
    
    ];
  }
  viewStudentDetails(studentId:number){
    this.router.navigate(['/student-details', studentId]);
  }
  navigateToStudentForm(){
    this.router.navigate(['/student-form']);
  }
}

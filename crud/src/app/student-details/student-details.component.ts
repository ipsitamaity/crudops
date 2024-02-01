import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: any;
  constructor(private route: ActivatedRoute){}
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const studentId= Number(params.get('id'));
      this.loadStudentDetails(studentId);
    });
  }
  loadStudentDetails(studentId: number){
    this.student={
      id: studentId,
      name:'Vaishnavi Adhav',
      DOB:'1996-08-05',
      subjects:{
        sub1: 90,
        sub2:99,
        sub3: 89,
        sub4: 78,
        sub5: 95
      }
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student:any;
  constructor(private route: ActivatedRoute, private router: Router)
  {}
  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      const studentId= Number(params.get('id'));
      this.student={
        id: studentId,
        name:'Radhika Singh',
        dob:'1995-02-05',
        subjects:{sub1:80, sub2:85,sub3:90,sub4:95,sub5:75}
      };
  });

}
navigateToEditStudent(){
  this.router.navigate(['/edit-student', this.student.id]);
}
navigateToDeleteStudent(){
  this.router.navigate(['/delete-student', this.student.id]);
}
}
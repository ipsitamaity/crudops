import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user={
    username:'',
    password:''
  };
  constructor(private router: Router)
  {}
  onSubmit(){
    if (this.user.username==='example'&& this.user.password==='password'){
      this.router.navigate(['/home']);
    }else{
      alert('Invalid username or password');
    }
  }

}

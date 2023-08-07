import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ErrorToastService } from 'src/app/services/error-toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '', 
    password: '' 
  };

  constructor(private userService: UserService, private router:Router,private errorToastService: ErrorToastService ) { }
  register() {
    const { name, password } = this.user;

    this.userService.register(name, password).subscribe(
      () => {
        this.router.navigate(['login']);
      },
      (error) => {
        this.errorToastService.showError('There have been already this name account')
        console.log('Register failed:', error);
      }
    );
  }
}

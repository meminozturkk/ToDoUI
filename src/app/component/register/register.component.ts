import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

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

  constructor(private userService: UserService, private router:Router) { }
  register() {
    const { name, password } = this.user;

    this.userService.register(name, password).subscribe(
      () => {
        console.log('Register successful!');
      },
      (error) => {
        console.log('Register failed:', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user.login',
  templateUrl: './user.login.component.html',
  styleUrls: ['./user.login.component.css']
})
export class UserLoginComponent{
  public user = {
    id: '',
    name: '', 
    password: '' 
  };
  static user: any;
constructor(private userService: UserService, private router:Router){}

  login() {
    const { name, password } = this.user;
    this.userService.login(name, password).subscribe(
      () => {
        
        console.log('Login successful!');
        this.router.navigate(['/todos']);

      },
      (error) => {
        console.log('Login failed:', error);
      }
    );
}

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { UserLoginComponent } from './component/user.login/user.login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent {
  title = 'ToDo';
  user = {
    name: '', 
    password: '' 
  };


  constructor(private userService: UserService, private router:Router){}
  logout() {
      this.userService.logoutUser().subscribe(
        () => {
         
          this.user = null;
          console.log('User logged out successfully');
        },(error) => {
          console.error('Logout failed:', error);
        }
      );
    }
    isLoggedIn() {
      return this.userService.isLoggedIn();
    }
}


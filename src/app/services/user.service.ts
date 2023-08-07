import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  baseUrl: string= 'https://localhost:7143';
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    const loginData = { name: username, password: password };
    let loginUrl = this.baseUrl + '/api/user/login';
    return this.http.post(loginUrl, loginData).pipe(
      tap((response: any) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
  isLoggedIn(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser;
  }
  register(name: string, password: string): Observable<any> {

    const userData = { name: name, password: password };
    let registerUrl = this.baseUrl + '/api/user/register';
    
    return this.http.post(registerUrl, userData).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
  logoutUser(): Observable<any> {
    let logoutUserUrl = this.baseUrl + '/api/user/Logout';
    localStorage.removeItem('currentUser');
    return this.http.post<any>(logoutUserUrl, {});
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.isLoggedIn()) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}

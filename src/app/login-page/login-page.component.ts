import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";
import {User} from "../services/auth/model/user";
import {ProductRepresentation} from "../services/api/models/product-representation";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent{

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.roles = [
      'admin',
      'user'
    ];
  }


  email: string ='';
  password: string ='';

  user: { password: string; email: string } = {
    email: this.email,
    password: this.password
  };


  roles : string[];

  // ngOnInit(): void {
  //   this.email = '';
  //   this.password = '';
  // }

  login() {
    let myList: Array<User> = [
      {name:'khaled',
       email: 'kaltarteer@gmail.com',
       password: 'no-pass',
      role:'admin'},
      {name:'monte',
        email: 'monte@gmail.com',
        password: 'no-pass',
        role:'user'}
    ];
    localStorage.setItem('users', JSON.stringify(myList));
    let value = localStorage.getItem('users');

    if (value != '' && value != null && typeof value != "undefined"){
       let arrayOfUsers = JSON.parse(value!);
       let foundUser = arrayOfUsers.find((element:User) => {
         console.log('the element.email is: '+element.email);
         console.log('the this.email is: '+this.email);
         return element.email == this.email;
      });
      console.log(foundUser);
      console.log(this.user.email);
      if (foundUser){
        this.authService.setUserRole(foundUser.role);  // Save user role in AuthService
        if (foundUser.role === 'admin'){
          this.router.navigate(['adminHomePage']);
        }
        else if(foundUser.role === 'user') {
          this.router.navigate(['userHomePage']);
        }
      }else {
        console.log('User not found');  // Handle case when user is not found
        // Optionally, add an error message for the user
      }
    }
  }
}


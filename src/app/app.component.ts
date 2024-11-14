import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { AuthService } from "./services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showMenu: boolean = true;
  isAdmin: boolean = false;
  isUser: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    // Hide menu if the route is '/login'
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = this.router.url !== '/login';
        this.updateRoleBasedMenu();  // Update menu based on role
      }
    });
  }

  ngOnInit(): void {
    this.updateRoleBasedMenu();  // Initial check on component load
  }

  private updateRoleBasedMenu() {
    const role = this.authService.getUserRole();
    if (role === 'admin') {
      this.isAdmin = true;
      this.isUser = false;
    } else if (role === 'user') {
      this.isUser = true;
      this.isAdmin = false;
    } else {
      this.isAdmin = false;
      this.isUser = false;
    }
  }
}

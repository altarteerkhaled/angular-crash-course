import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userRole: string | null = null;

  setUserRole(role: string) {
    this.userRole = role;
    localStorage.setItem('userRole', role);
  }

  getUserRole() {
    return this.userRole || localStorage.getItem('userRole');
  }
}

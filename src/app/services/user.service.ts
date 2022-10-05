import { Injectable } from '@angular/core';
import { IAuthData, IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users: IUser[];

  constructor() { }

  public signUp(user: IUser): boolean {
    if (this.checkUser(user.email)) return false;
    this.userList.push(user);
    localStorage.setItem('users', JSON.stringify(this.userList));
    return true
  } 

  public signIn({email, pass}: IAuthData): boolean {
    const currentUser = this.checkUser(email, pass);
    if (!currentUser) return false;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return true;
  }

  private get userList(): IUser[] {
    if (!this.users) {
      this.users = JSON.parse(localStorage.getItem('users'));
    }
    return this.users || [];
  }
  
  private checkUser(email : string, password?: string): IUser {
    return this.userList?.find((user: IUser) => {
      if (password) return user.email === email && user.pass === password;
      return user.email === email
    });
  }
}

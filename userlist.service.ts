import {Injectable} from '@angular/core';

@Injectable()
export class UserlistService {

  usernameList: string[] = [
    'admin'
  ];
  passwordList: string[] = [
    'admin'
  ];

  constructor() {}

  checkID(name: string, pw: string) {
    let temp = false;
    temp = this.usernameList.includes(name);
    if (temp) {
      temp = this.passwordList.includes(pw);
    }
    return temp;
  }
  addUser(name: string, pw: string): void {
    this.usernameList.push(name);
    this.passwordList.push(pw);
  }

}

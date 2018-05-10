import { Component, OnInit }                  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 username: string;
 password1: string;

 login: FormGroup;

 ngOnInit(): void {
 }
 check(): boolean {
   let flag: boolean;
   if (this.username === 'John' && this.password1 === '1234') {
      flag = true;
   } else {
     flag = false;
   }
   return flag;
 }

}

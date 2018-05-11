import {UserlistService} from '../userlist.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password1: string;
  wrongID = true;

  login: FormGroup;

  constructor(
    private idService: UserlistService,
    private location: Location,
    private route: Router

  ) {}
  ngOnInit(): void {
  }
  check(): boolean {
    let flag = this.idService.checkID(this.username, this.password1);
    console.log(flag);
    return flag;
  }

  onSubmit(): void {
    this.wrongID = this.check();
    if (this.wrongID) {
      this.route.navigateByUrl('/list');
    }
  }

  goHome(): void {
    this.wrongID = true;
  }

  get(e): void {
    console.log(e);
  }
  goBack(): void {
    this.location.back();
  }

}

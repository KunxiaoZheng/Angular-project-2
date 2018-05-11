import {UserlistService} from '../userlist.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private user: UserlistService,
    private location: Location) {}

  ngOnInit() {
  }

  addUser(): void {
    this.user.addUser(this.username, this.password);
    this.location.back();
  }
}

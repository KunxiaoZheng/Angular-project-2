import { Person } from '../person';
import { PersonService } from '../person.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() person: Person;


  id: number;
  firstName: string;
  lastName: string;
  age: number;
  city: string;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getID();
    if (this.id > 0) {
      this.getPerson();
    }
  }
  getID(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  getPerson(): void {
    this.personService.getPerson(this.id).subscribe(person => this.person = person);
  }
  
  getNewId() {
    let tempID: number;
    this.personService.getNewID().subscribe(number => tempID = number);
    return tempID;
  }

  addPerson(): void {
    let userID = this.getNewId() + 1;
    let temp: Person = {
      id : userID,
      firstName : this.firstName,
      lastName: this.lastName,
      age: this.age,
      city: this.city
    };
    this.personService.addPerson(temp);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}

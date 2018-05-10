import { Person } from '../person';
import { PersonService } from '../person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personList: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.personService.getList().subscribe(list => this.personList = list);
  }

  deletePerson(i: number): void  {
    this.personService.deletePerson(i);
  }

}

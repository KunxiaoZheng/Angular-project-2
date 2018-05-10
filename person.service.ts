import { Person } from './person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()

export class PersonService {

  personList: Person [] = [{
  id : 1,
  firstName : 'Tommy',
  lastName: 'Hawk',
  age: 34,
  city: 'Toronto'
  }, {
  id : 2,
  firstName : 'John',
  lastName: 'Peter',
  age: 48,
  city: 'New York'
  }, {
  id : 3,
  firstName : 'Will',
  lastName: 'Potter',
  age: 24,
  city: 'London'
  }, {
  id : 4,
  firstName : 'Amy',
  lastName: 'Smith',
  age: 24,
  city: 'Vancouver'
  }];

  constructor() { }
  getList(): Observable<Person[]> {
    return of(this.personList);
  }

  getPerson(id: number): Observable<Person> {
    return of(this.personList.find(person => person.id === id));
  }

  deletePerson(i: number): void {
    this.personList.splice(i, 1);
  }

  addPerson(temp: Person): void {
    this.personList.push(temp);
  }

   getNewID(): Observable<number> {
    return of(this.personList[this.personList.length - 1].id + 1);
  }

}

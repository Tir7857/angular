import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from '../domain/domain.hero';

@Injectable({providedIn: 'root'})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [{
      id: 10,
      name: 'Windstorm',
      date: new Date()
    }, {
      id: 20,
      name: 'Apple iPhone',
      date: new Date()
    }, {
      id: 30,
      name: 'Huawei Mate',
      date: new Date()
    }, {
      id: 40,
      name: 'Samsung Galaxy',
      date: new Date()
    }, {
      id: 50,
      name: '5',
      date: new Date()
    }];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

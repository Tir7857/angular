import {Injectable} from '@angular/core';
import {Hero} from '../domain/domain.hero';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  data = [{
    id: 1,
    name: 'Windstorm',
    date: new Date()
  }, {
    id: 2,
    name: 'Apple iPhone',
    date: new Date()
  }, {
    id: 3,
    name: 'Huawei Mate',
    date: new Date()
  }, {
    id: 4,
    name: 'Samsung Galaxy',
    date: new Date()
  }, {
    id: 5,
    name: '5',
    date: new Date()
  }];

  constructor() {
  }

  public findAll(): Hero[] {
    return this.data;
  }

  public find(id: number): Hero {
    return this.data.find(x => x.id == id);
  }
}

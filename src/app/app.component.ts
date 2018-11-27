import {Component, OnInit} from '@angular/core';
import {Hero} from './domain/domain.hero';
import {HeroServiceService} from './service/hero-service.service';
import {HeroHttpService} from './service/hero-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProgectAng';
  currentHero: Hero = {
    id: 2, name: '123'
  };

  constructor(private heroService: HeroHttpService) {
  }

  heroes: Hero[];

  onSelected(hero: Hero) {
    this.currentHero = hero;
  }

  ngOnInit(): void {
    this.heroService.findAll().subscribe(x => this.heroes = x);
  }
}



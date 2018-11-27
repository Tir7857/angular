import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../domain/domain.hero';
import {HeroServiceService} from '../service/hero-service.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroHttpService} from '../service/hero-http.service';

@Component({
  selector: 'app-hero-deteils',
  templateUrl: './hero-deteils.component.html',
  styleUrls: ['./hero-deteils.component.css']
})
export class HeroDeteilsComponent implements OnInit {
  @Input()
  currentHero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroHttpService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.heroService.getHero(id).subscribe(x => this.currentHero = x);
    });
  }

  onSelected(hero: Hero) {
    this.currentHero = hero;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit{
  constructor(private router: Router,private heroService: HeroService){}
  ngOnInit(){
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }
  heroes:Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    // this.selectedHero = hero;
    this.router.navigate(['/detail', hero.id]);
  }
}

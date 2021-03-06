import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private heroService: HeroService){}
  ngOnInit(){
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }
  heroes:Hero[];
  title = 'Tour of Heroes';
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit{
  constructor(private heroService: HeroService){}
  ngOnInit(){
  	this.heroService.getHeroes()
  	      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  heroes:any;
}

import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes : Hero[] = [];
  selectHero ?: Hero

  // hero: Hero = {
  //   id : 1,
  //   name : 'Aditya Singh'
  // } 

  constructor(private heroService : HeroService, private messageService : MessageService){}

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe((hero => this.heroes = hero));
  }

  onSelect(hero : Hero):void {
    this.selectHero = hero;
    this.messageService.add(`HeroComponent : Selected Hero id = ${hero.id} & Name : ${hero.name}`)
  }
}

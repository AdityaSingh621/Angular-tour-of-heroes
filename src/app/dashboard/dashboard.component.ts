import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService : HeroService){}

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe((hero) => {
      this.heroes = hero.slice(1, 5);
    })
  }
}

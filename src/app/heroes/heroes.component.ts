import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';
  // po pobraniu klasy Hero z hero.ts musimy ją teraz połączyć z naszą propery hero
  // rzeby mogło sie to wyświetlić trzeba stworzyc odpowiedni html
  // 2 ETEP
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // 3 ETAP
  // heroes = HEROES;
  selectedHero: Hero;
  // 4 ETAP
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // tslint:disable-next-line:max-line-length
  // void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

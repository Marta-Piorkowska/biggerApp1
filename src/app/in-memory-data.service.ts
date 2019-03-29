import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Thanos' },
      { id: 12, name: 'Ironman' },
      { id: 13, name: 'Black panter' },
      { id: 14, name: 'Spiderman' },
      { id: 15, name: 'Dr. Strange' },
      { id: 16, name: 'Venom' },
      { id: 17, name: 'Loki' },
      { id: 18, name: 'Thor' },
      { id: 19, name: 'Hulk' },
      { id: 20, name: 'Captin Marvel' }
    ];
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
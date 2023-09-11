import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service/hero.service';
import { MessageService } from '../services/message.service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Property to store the selected hero
  selectedHero?: Hero;
  // Property to store the list of heroes
  heroes: Hero[] = [];

  // Inject the HeroService and MessageService into the constructor
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Fetch heroes using the HeroService and assign them to the heroes property
  getHeroes(): void {
    this.heroService.getHeroes()
      // subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
      .subscribe(heroes => this.heroes = heroes);
  }

  // Call the getHeroes method when the component is initialized
  ngOnInit(): void {
    this.getHeroes();
  }

  // Method to handle the selection of a hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}

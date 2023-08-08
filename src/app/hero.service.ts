import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

// Class to call the service and get heroes
export class HeroService {

  // Initializes the messageService method
  constructor(private messageService: MessageService) { }


  // Method to retrieve heroes using the Observable interface 'Hero'.
  // It defines a variable 'heroes' equal to the 'HEROES' array.
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}

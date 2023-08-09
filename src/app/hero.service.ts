import { Injectable } from '@angular/core';
//Import the class for handling real-time data
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// import { MessageService } from './message.service';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

// Class to call the service and get heroes
export class HeroService {
  private urlApiHeroes = 'http://localhost:3010/api/heroes';

  // Initializes the messageService method
  constructor(private http: HttpClient) { }


  // Method to retrieve heroes using the Observable interface 'Hero'.
  // It defines a variable 'heroes' equal to the 'HEROES' array.
  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.urlApiHeroes)

  }

}

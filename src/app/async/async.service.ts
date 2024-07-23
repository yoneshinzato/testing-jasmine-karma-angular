import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'Dr. IQ', 'Magma', 'Tornado'];

  constructor() { }

  getAsyncData(): Observable<string[]> {
    return of(this.heroes).pipe(delay(500));
  }

}

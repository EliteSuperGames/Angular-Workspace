import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@my-lib';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  http = inject(HttpClient);

  public getGreetings(name: string): Observable<any> {
    return this.http.get(ENDPOINTS.GREETINGS + '?name=' + name);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    // return of(userSettings);
    return this.httpClient.post(
      'https://putsreq.com/SFrBDd6SL5WI7HS9lFaJ',
      userSettings
    );
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}

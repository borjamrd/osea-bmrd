import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Artist, Company, Song } from '@app/core/interfaces';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  delayTime = 1000

  private _http = inject(HttpClient)
  constructor() { }

  getSongs(): Observable<Song[]> {
    return this._http.get<Song[]>(`http://localhost:3000/songs`).pipe(delay(this.delayTime))
  }
  getCompanies(): Observable<Company[]> {
    return this._http.get<Company[]>(`http://localhost:3000/companies`).pipe(delay(this.delayTime))
  }
  getArtists(): Observable<Artist[]> {
    return this._http.get<Artist[]>(`http://localhost:3000/artists`).pipe(delay(this.delayTime))
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Artist, Company, Song } from '@app/core/interfaces';
import { BehaviorSubject, Observable, delay, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  delayTime = 1000

  private _http = inject(HttpClient)
  private songsSource: BehaviorSubject<Song[]>
  private artistsSource: BehaviorSubject<Artist[]>
  private companiesSource: BehaviorSubject<Company[]>

  songs$: Observable<Song[]>
  artists$: Observable<Artist[]>
  companies$: Observable<Company[]>
  constructor() {
    this.songsSource = new BehaviorSubject<Song[]>([])
    this.artistsSource = new BehaviorSubject<Artist[]>([])
    this.companiesSource = new BehaviorSubject<Company[]>([])

    this.songs$ = this.songsSource.asObservable()
    this.artists$ = this.artistsSource.asObservable()
    this.companies$ = this.companiesSource.asObservable()
  }

  getSongs(): Observable<Song[]> {
    if (this.songsSource.value.length) {
      return this.songs$
    }
    return this.getSongsFromAPI()
  }
  getCompanies(): Observable<Company[]> {
    return this._http.get<Company[]>(`http://localhost:3000/companies`).pipe(delay(this.delayTime))
  }
  getArtists(): Observable<Artist[]> {
    return this._http.get<Artist[]>(`http://localhost:3000/artists`).pipe(delay(this.delayTime))
  }

  getSongsFromAPI(): Observable<Song[]> {
    return this._http.get<Song[]>(`http://localhost:3000/songs`).pipe(
      delay(this.delayTime),
      switchMap(songs => {
        return this.getArtists().pipe(
          map(artists => {
            songs.forEach((song: Song) => {
              const artist = artists.find(a => a.id == song.artist);
              if (artist) {
                song.artist = artist.name;
              }
            });
            return songs;
          })
        );
      }),
      map((songs: Song[]) => {
        this.songsSource.next(songs);
        return songs;
      })
    );
  }
}



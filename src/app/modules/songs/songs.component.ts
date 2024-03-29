import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Song } from '@app/core/interfaces';
import { DataService } from '@app/data/services/data.service';
import { CardSongSkelletonComponent } from '@app/shared/components/card-song-skelleton/card-song-skelleton.component';
import { CardSongComponent } from '@app/shared/components/card-song/card-song.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
@Component({
  selector: 'osea-songs',
  standalone: true,
  imports: [CommonModule, CardSongSkelletonComponent, CardSongComponent, RouterModule, ButtonModule, TranslateModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent implements OnInit {

  songs$!: Observable<Song[]>

  private _data = inject(DataService)

  ngOnInit(): void {
    this.songs$ = this._data.getSongs()
  }


}

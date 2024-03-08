import { Observable } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';
import { Song } from '@app/core/interfaces';
import { DataService } from '@app/data/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardSongSkelletonComponent } from '@app/shared/components/card-song-skelleton/card-song-skelleton.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'osea-song-info',
  standalone: true,
  imports: [CommonModule, CardSongSkelletonComponent, DividerModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './song-info.component.html',
  styleUrl: './song-info.component.css'
})
export class SongInfoComponent implements OnInit {


  edit: boolean = false
  songId!: string;
  private route = inject(ActivatedRoute);
  private _message = inject(MessageService)

  song$!: Observable<Song>
  private _data = inject(DataService)


  ngOnInit(): void {
    this.songId = this.route.snapshot.paramMap.get('id') || ''
    this.song$ = this._data.getSongInfo(this.songId)

  }


  handleEdit() {
    this.edit = !this.edit

  }

  submit() {
    this._message.add({
      'severity': 'success',
      detail: 'Success!',

    })
  }

  delete() {
    this._message.add({
      'severity': 'success',
      detail: 'Success!',

    })
  }

}

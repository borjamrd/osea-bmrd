import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Song } from '@app/core/interfaces';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'osea-card-song',
  standalone: true,
  imports: [CardModule, RouterModule],
  templateUrl: './card-song.component.html',
  styleUrl: './card-song.component.css'
})
export class CardSongComponent {



  @Input() song!: Song

}

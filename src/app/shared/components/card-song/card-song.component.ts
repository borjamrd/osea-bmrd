import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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

  route = inject(ActivatedRoute)


  @Input() song!: Song
  constructor() {
    console.log(this.route)
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips'
import { MessageService } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { TranslateModule } from '@ngx-translate/core';
interface Country {
  name: string;
  code: string;
}

interface Company {
  name: string;
  code: string;
}
interface Genre {
  name: string;
  code: string;
}
@Component({
  selector: 'osea-add-song',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, MultiSelectModule, CalendarModule, DropdownModule, ChipsModule, InputNumberModule, ToastModule, TranslateModule],
  providers: [MessageService],
  templateUrl: './add-song.component.html',
  styleUrl: './add-song.component.css'
})
export class AddSongComponent implements OnInit {
  newSong
  private _fb = inject(FormBuilder)
  private _message = inject(MessageService)
  allCountries: Country[] = []
  allCompanies: Country[] = []
  allGenres: Genre[] = []

  constructor() {
    this.newSong = this._fb.group({
      title: new FormControl('', Validators.required),
      artists: new FormControl([], Validators.required),
      genres: new FormControl([], Validators.required),
      company: new FormControl<Company[] | null>([], Validators.required),
      country: new FormControl<Country | null>(null, Validators.required),
      year: new FormControl<Date | string>('', [Validators.required, Validators.min(4)]),
      score: new FormControl<Number | null>(null, Validators.required),
    })

  }

  ngOnInit(): void {
    this.allCountries = [
      { name: 'Spain', code: 'ES' },
      { name: 'United Kingdom', code: 'EN' },
      { name: 'France', code: 'FR' },
      { name: 'Italy', code: 'IT' },

    ];

    this.allGenres = [
      { name: 'Rock', code: 'ROC' },
      { name: 'Pop', code: 'POP' },
      { name: 'Classical', code: 'CLASS' },
      { name: 'Country', code: 'COU' },
      { name: 'Hip Hop', code: 'HP' }
    ];
    this.allCompanies = [
      { name: 'Symphony Cat', code: 'NY' },
      { name: 'Musicially', code: 'RM' },
      { name: 'Chorstdify', code: 'LDN' },
      { name: 'Akabulla', code: 'IST' },
      { name: 'Note-digo', code: 'PRS' }
    ];
  }


  submit() {

    this._message.add({
      summary: 'Good!',
      severity: 'success',
      detail: '✅ Song added succesfully',
    })
  }
}

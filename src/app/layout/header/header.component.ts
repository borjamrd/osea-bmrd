import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarService } from '@app/shared/services/sidebar.service';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';

interface Language {
  name: string;
  code: string;
}
@Component({
  selector: 'osea-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  languages: Language[] = [
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];
  private _sidebar = inject(SidebarService)
  private _fb = inject(FormBuilder)

  languageForm

  constructor() {

    this.languageForm = this._fb.group({
      selectedLang: new FormControl(this.languages[0])
    })
  }



  handleSidebar() {

    this._sidebar.changeOpenStatus(true)

  }
}

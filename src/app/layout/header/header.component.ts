import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarService } from '@app/shared/services/sidebar.service';
import { TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { distinctUntilChanged } from 'rxjs';

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
    { name: 'Spain', code: 'es' },
    { name: 'United States', code: 'en' }
  ];
  private _sidebar = inject(SidebarService)
  private _fb = inject(FormBuilder)
  private _translate = inject(TranslateService)
  languageForm

  constructor() {

    this.languageForm = this._fb.group({
      selectedLang: new FormControl(this.languages[1])
    })

    this.languageForm.valueChanges.pipe(distinctUntilChanged()).subscribe((r) => {
      if (!r.selectedLang?.code) return

      console.log(r.selectedLang.code)
      this._translate.use(r.selectedLang?.code)
    })


  }



  handleSidebar() {

    this._sidebar.changeOpenStatus(true)

  }
}

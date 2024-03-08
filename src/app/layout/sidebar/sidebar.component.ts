import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '@app/shared/services/sidebar.service';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';


@Component({
  selector: 'osea-sidebar',
  standalone: true,
  imports: [SidebarModule, CommonModule, ButtonModule, RouterModule, TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarVisible!: boolean

  menuItems: { text: string, link: string }[] = [{ text: 'Songs', link: 'songs' }, { text: 'Artists', link: 'artists' }, {
    text: 'Discographic companies', link: 'companies'
  }]



  private _sidebar = inject(SidebarService)



  constructor() {
    this._sidebar.getStatus().subscribe((r) => this.sidebarVisible = r)

  }
  close() {
    this._sidebar.changeOpenStatus(false)
  }
}


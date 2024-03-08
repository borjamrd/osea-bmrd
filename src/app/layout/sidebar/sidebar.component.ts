import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '@app/shared/services/sidebar.service';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';


@Component({
  selector: 'osea-sidebar',
  standalone: true,
  imports: [SidebarModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarVisible!: boolean

  menuItems: { text: string, link: string }[] = [{ text: 'Canciones', link: 'songs' }, { text: 'Artistas', link: 'artists' }, {
    text: 'Compañías discográficas', link: 'companies'
  }]



  private _sidebar = inject(SidebarService)



  constructor() {
    this._sidebar.getStatus().subscribe((r) => this.sidebarVisible = r)

  }
  close() {
    this._sidebar.changeOpenStatus(false)
  }
}


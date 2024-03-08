import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarService } from '@app/shared/services/sidebar.service';
import { SidebarModule } from 'primeng/sidebar';


@Component({
  selector: 'osea-sidebar',
  standalone: true,
  imports: [SidebarModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarVisible!: boolean
  private _sidebar = inject(SidebarService)

  constructor() {
    this._sidebar.getStatus().subscribe((r) => this.sidebarVisible = r)

  }
}


import { Component, inject } from '@angular/core';
import { SidebarService } from '@app/shared/services/sidebar.service';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'osea-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private _sidebar = inject(SidebarService)
  handleSidebar() {

    this._sidebar.changeOpenStatus(true)

  }
}

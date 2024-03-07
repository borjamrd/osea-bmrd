import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'osea-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

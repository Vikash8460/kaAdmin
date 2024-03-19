import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}

import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  showSidebar = false; // Renamed to showSidebar for clarity

  constructor() { }

  toggleSidebar() {
    this.drawer.toggle();
  }
}


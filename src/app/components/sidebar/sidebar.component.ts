import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isClosed: boolean = false;

  closeSidebar() {
    this.isClosed = !this.isClosed;
    console.log('it works!');
  }
}


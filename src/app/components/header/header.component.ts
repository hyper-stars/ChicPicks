import { Component } from '@angular/core';
import { UserFilterService } from 'src/app/services/user-filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = "";

  constructor(private userFilterService: UserFilterService) {

  }

  searchTimeout: number = null!;
  onUserSearch($event: KeyboardEvent) {
    let filters = this.userFilterService.Filters.getValue();
    filters.searchQuery = this.searchQuery;

    if (this.searchTimeout != null) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = window.setTimeout(() => {
      this.userFilterService.Filters.next(filters);
    }, 1000);
  }
}

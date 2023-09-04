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

  onUserSearch($event: KeyboardEvent) {
    let filters = this.userFilterService.Filters.getValue();
    filters.searchQuery = this.searchQuery;
    
    this.userFilterService.Filters.next(filters);
  }
}

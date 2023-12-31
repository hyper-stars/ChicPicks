import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserFilter } from 'src/models/user-filter';

@Injectable({
  providedIn: 'root'
})
export class UserFilterService {

  public Filters: BehaviorSubject<UserFilter>;

  constructor() {
    let filter = new UserFilter();
    filter.category = "all";
    filter.minPrice = 0;
    filter.maxPrice = 1000;
    filter.searchQuery = "";

    this.Filters = new BehaviorSubject<UserFilter>(filter);
  }
}

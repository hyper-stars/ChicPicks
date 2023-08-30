import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import { UserFilterService } from 'src/app/services/user-filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private categoriesService: CategoriesService, private userFilterService : UserFilterService){}
    categoryList: string []= [];

  ngOnInit() {
    this.categoriesService.GetAll().subscribe((resultApi: string[]) => {
      this.categoryList = resultApi;
    });
  }
  isClosed: boolean = false;

  closeSidebar() {
    this.isClosed = !this.isClosed;
    console.log('it works!');
  }

  onClickCategory(category: string){
    let filters = this.userFilterService.Filters.getValue();
    filters.category=category;
    this.userFilterService.Filters.next(filters);
  }
}


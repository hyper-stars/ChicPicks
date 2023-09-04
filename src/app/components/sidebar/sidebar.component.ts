import { Component, HostListener, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import { UserFilterService } from 'src/app/services/user-filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isClosed: boolean = false;
  categoryList: string[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private userFilterService: UserFilterService
  ) {}
  ngOnInit() {
    this.categoriesService.GetAll().subscribe((resultApi: string[]) => {
      this.categoryList = resultApi;
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }
  checkScreenSize(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 992) {
      this.isClosed = true;
    } else {
      this.isClosed = false;
    }
  }

  closeSidebar() {
    this.isClosed = !this.isClosed;
    console.log('it works!');
  }

  onClickCategory(category: string) {
    let filters = this.userFilterService.Filters.getValue();
    filters.category = category;
    this.userFilterService.Filters.next(filters);
  }
}

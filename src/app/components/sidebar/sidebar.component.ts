import { Component, HostListener, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { UserFilterService } from 'src/app/services/user-filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isClosed: boolean = false;
  categoryList: string[] = [];

  minPrice: number = 0;
  maxPrice: number = 20000;

  constructor(
    private categoriesService: CategoriesService,
    private userFilterService: UserFilterService,
    public productsService:ProductsService
  ) { }

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

  onPriceChange($event: Event) {
    let filters = this.userFilterService.Filters.getValue();
    filters.minPrice = this.minPrice;
    filters.maxPrice = this.maxPrice;

    this.userFilterService.Filters.next(filters);
  }
}

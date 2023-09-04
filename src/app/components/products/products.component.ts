import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UserFilterService } from 'src/app/services/user-filter.service';
import { Product } from 'src/models/product';
import { UserFilter } from 'src/models/user-filter';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsComponent: Product[] = [];
  searchQuery: string = ''; // The user's search query

  constructor(
    private productsService: ProductsService,
    private filterService: UserFilterService
  ) {}

  ngOnInit() {
    this.filterService.Filters.subscribe((updatedFilters: UserFilter) => {
      if (updatedFilters.category === 'all') {
        this.fetchProducts();
      } else {
        this.productsService
          .GetAllByCategory(updatedFilters.category)
          .subscribe((resultApi: Product[]) => {
            this.productsComponent = resultApi;
          });
      }
    });
  }


  fetchProducts() {
    this.productsService
      .searchProducts(this.searchQuery) 
      .subscribe((resultApi: Product[]) => {
        this.productsComponent = resultApi;
      });
  }
  onSearch() {
    if (this.searchQuery) {
      this.productsComponent = this.productsComponent.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      // Reset the products if the search query is empty
      this.fetchProducts();
    }
  }
}

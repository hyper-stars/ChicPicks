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
  filters: UserFilter;

  constructor(
    private productsService: ProductsService,
    private filterService: UserFilterService
  ) {
    this.filters = new UserFilter();
  }

  ngOnInit() {
    this.filterService.Filters.subscribe((updatedFilters: UserFilter) => {
      this.filters = updatedFilters;

      this.fetchProducts();
    });

  }

  fetchProducts() {

    this.productsService.GetAll(this.filters.category)
      .subscribe((resultApi: Product[]) => {

        const query = this.filters.searchQuery;
        if (query && query !== '') {
          this.productsComponent = resultApi
            .filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
        } else {
          this.productsComponent = resultApi;
        }

      });
  }

}

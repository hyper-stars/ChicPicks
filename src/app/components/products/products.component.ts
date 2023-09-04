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
        this.productsComponent = resultApi;

        const prices = resultApi.map(x => x.price);

        this.productsService.MinPrice = prices.sort((a,b)=>a-b)[0];
        this.productsService.MaxPrice = prices.sort((a,b)=>a-b).slice(-1)[0];

        if (query && query !== '') {
          this.productsComponent = this.productsComponent
            .filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
        }

        const minPrice = this.filters.minPrice;
        const maxPrice = this.filters.maxPrice;
        if (minPrice >= 0 && maxPrice >= minPrice) {
          this.productsComponent = this.productsComponent
            .filter(product => product.price >= minPrice && product.price <= maxPrice);
        }

      });
  }

}

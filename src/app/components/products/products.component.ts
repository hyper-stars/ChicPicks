import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
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

  constructor(
    private productsService: ProductsService,
    private fiterService: UserFilterService
  ) {}

  ngOnInit() {
    this.fiterService.Filters.subscribe((updatedFilters: UserFilter) => {
      if (updatedFilters.category === 'all') {
        this.productsService.GetAll().subscribe((resultApi: Product[]) => {
          this.productsComponent = resultApi;
        });
      } else {
        this.productsService
          .GetAllByCategory(updatedFilters.category)
          .subscribe((resultApi: Product[]) => {
            this.productsComponent = resultApi;
          });
      }
    });
  }
}

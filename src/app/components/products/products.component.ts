import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsComponent: Product[] = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.productsService.GetAll()
      .subscribe((resultApi: Product[]) => {
        this.productsComponent = resultApi;
      });
  }


}

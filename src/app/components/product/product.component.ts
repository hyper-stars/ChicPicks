import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.product = new Product();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {

      const itemId = params['producId'];
      this.productService.GetByIdProduct(itemId).subscribe((product) => {
        this.product = product;
      });

    });

    this.route.queryParams.subscribe(p => {
      console.log(p);
    });
  }
}

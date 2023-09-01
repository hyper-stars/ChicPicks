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
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const itemId = params['id'];
      console.log('Item ID:', itemId);
      this.productService.GetByIdProduct(itemId).subscribe((product) => {
        this.products.push(product);
      });
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {

  }

  GetAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }

  GetAllByCategory(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products/category/' + category);
  }


  GetById(): Product {

    return new Product();
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'https://fakestoreapi.com/products';

  GetAll(category: string = "all"): Observable<Product[]> {

    let apiUrl = this.apiUrl;

    if (category != 'all') {
      apiUrl += `/category/${category}`;
    }

    return this.httpClient.get<Product[]>(apiUrl);
  }

  GetByIdProduct(id: number) {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';

  public MinPrice: number = 0;
  public MaxPrice: number = 1000;

  constructor(private httpClient: HttpClient) { }


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

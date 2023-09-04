import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = 'https://fakestoreapi.com/products';

  GetAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  GetAllByCategory(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `${this.apiUrl}/category/${category}`
    );
  }

  GetByIdProduct(id: number) {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  searchProducts(query: string): Observable<Product[]> {
    const searchUrl = `${this.apiUrl}?q=${query}`;
    return this.httpClient.get<Product[]>(searchUrl);
  }
}

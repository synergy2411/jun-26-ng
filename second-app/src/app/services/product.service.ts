import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/products';
  constructor() {}

  fetchAll() {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
}

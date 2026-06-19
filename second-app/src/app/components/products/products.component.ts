import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  private service = inject(ProductService);

  ngOnInit(): void {
    this.service
      .fetchAll()
      .subscribe((allProducts) => (this.products = allProducts));
  }
}

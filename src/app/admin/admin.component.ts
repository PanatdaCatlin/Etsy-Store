import { Component, OnInit } from '@angular/core';
import { product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductService]
})
export class AdminComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  submitForm(title: string, src: string, description: string) {
    const newProduct: product = new product(title, src, description);
    console.log(newProduct);
    this.productService.addProduct(newProduct);
  }

}

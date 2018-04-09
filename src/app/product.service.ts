import { Injectable } from '@angular/core';
import { product } from './product.model';
import { PRODUCTS } from './mock-products';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
      this.products = database.list('products');
    }
  getProducts() {
      return this.products;
    }
    addProduct(newProduct: product) {
    this.products.push(newProduct);
  }

    getProductById(productId: string) {
      return this.database.object('products/' + productId);
 }
 updateProduct(localUpdatedProduct) {
    var productEntryInFirebase = this.getProductById(localUpdatedProduct.$key);
    productEntryInFirebase.update({title: localUpdatedProduct.title,
                                src: localUpdatedProduct.src,
                                description: localUpdatedProduct.description});
  }

  deleteProduct(localProductToDelete) {
      var productEntryInFirebase = this.getProductById(localProductToDelete.$key);
      productEntryInFirebase.remove();
    }
}
